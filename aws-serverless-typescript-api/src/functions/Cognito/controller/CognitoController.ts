import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";
import { CognitoAws } from "@libs/cognito";
import { InitiateAuthCommandOutput } from "@aws-sdk/client-cognito-identity-provider/dist-types/commands/InitiateAuthCommand";
import { validate } from "class-validator";
import CognitoTransformer from "../transformer/CognitoTransformer";
import CognitoSchema from "../schema/CognitoSchema";
import cors from '@middy/http-cors'

const cognitoAws = new CognitoAws();

class CognitoController {
  static async login(event: APIGatewayEvent) {
    try {
      const dataUser: CognitoSchema = CognitoTransformer.reverse(event.body);
      const validatorBody = await validate(dataUser);

      if (validatorBody.length > 0) {
        const errosMessage = validatorBody
          .map((error) => Object.values(error.constraints))
          .join(", ");
        return formatJSONResponse(422, {
          success: false,
          message: "Validation error",
          response: errosMessage,
        });
      }
      const response: InitiateAuthCommandOutput =
        await cognitoAws.cognito_login(dataUser.email, dataUser.password);
      return formatJSONResponse(200, { success: true, data: response.AuthenticationResult.AccessToken,expire:response.AuthenticationResult.ExpiresIn });
    } catch (error) {
      return formatJSONResponse(500, {
        success: false,
        error: "Internal Server Error",
        message: error.message,
      });
    }
  }

  static async register(event: APIGatewayEvent) {
    try {
      const dataUser: CognitoSchema = CognitoTransformer.reverse(event.body);

      const validatorBody = await validate(dataUser);

      if (validatorBody.length > 0) {
        const errosMessage = validatorBody
          .map((error) => Object.values(error.constraints))
          .join(", ");
        return formatJSONResponse(422, {
          success: false,
          message: "Validation error",
          response: errosMessage,
        });
      }

      await cognitoAws.cognito_register(
        dataUser
      );

        await cognitoAws.admin_user_confirm(dataUser.email);

      return formatJSONResponse(201, {
        success: true,
        message: "user registration successful",
      });
    } catch (error) {
      return formatJSONResponse(500, {
        success: false,
        error: "Internal Server Error",
        message: error.message,
      });
    }
  }
}

export const Login = middyfy(CognitoController.login).use(cors());
export const Register = middyfy(CognitoController.register).use(cors());
