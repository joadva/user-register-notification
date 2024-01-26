import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { UserService } from "../services/UserService";
import UserTransformer from "../transformer/UserTransformer";
import { APIGatewayEvent } from "aws-lambda";
import sendEmail from "@libs/nodemailer";
import { authorize } from "@libs/authorization";
import { validate } from "class-validator";
import cors from '@middy/http-cors'

const userService = new UserService();

class UserController {
  static async getUsers(event: APIGatewayEvent) {
    try {
      let dataQuery;
      await authorize().before({ event });

      const queryParams = event.queryStringParameters;

      if (queryParams ) {
        dataQuery = queryParams;
      }

      const users = await userService.getUsers(dataQuery);
      
      return formatJSONResponse(200, { success: true, data: users });
    } catch (error) {
      return formatJSONResponse(500, {
        error: "Internal Server Error",
        message: error.message,
      });
    }
  }

  static async createUsers(event: APIGatewayEvent) {
    try {
      await authorize().before({ event });
      const dataUser = UserTransformer.reverse(event.body);

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
      const createUser = await userService.createUser(dataUser);
      await sendEmail(dataUser.first_name);
      return formatJSONResponse(201, {
        sucess: true,
        data: createUser,
        message: sendEmail,
      });
    } catch (error) {
      return formatJSONResponse(500, {
        error: "Internal Server Error",
        message: error.message,
      });
    }
  }
  static async getUser(event: APIGatewayEvent): Promise<{
    statusCode: number;
    body: string;
  }> {
    try {
      await authorize().before({ event });
      const { id } = event.pathParameters;
      const user = await userService.getUser(id);

      if (!user) {
        return formatJSONResponse(404, { error: "User not found" });
      }

      return formatJSONResponse(200, { sucess: true, data: user });
    } catch (error) {
      return formatJSONResponse(500, {
        error: "Internal Server Error",
        message: error.message,
      });
    }
  }

  static async updateUsers(event: APIGatewayEvent): Promise<{
    statusCode: number;
    body: string;
  }> {
    try {
      await authorize().before({ event });
      const { id } = event.pathParameters;
      const dataUser = UserTransformer.reverse(event.body);

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
      const updatedUser = await userService.updateUser(id, dataUser);

      if (!updatedUser) {
        return formatJSONResponse(404, { error: "User not found" });
      }

      return formatJSONResponse(200, { sucess: true, data: updatedUser });
    } catch (error) {
      return formatJSONResponse(500, {
        error: "Internal Server Error",
        message: error,
      });
    }
  }
  static async dropUsers(event: APIGatewayEvent): Promise<{
    statusCode: number;
    body: string;
  }> {
    try {
      await authorize().before({ event });
      const { id } = event.pathParameters;
      const deleted = await userService.deleteUser(id);

      if (!deleted) {
        return formatJSONResponse(404, { error: "User not found" });
      }

      return formatJSONResponse(200, {
        success: true,
        data: deleted,
        message: "User deleted successfully",
      });
    } catch (error) {
      return formatJSONResponse(500, {
        error: "Internal Server Error",
        message: error.message,
      });
    }
  }
}

export const GetUsers = middyfy(UserController.getUsers).use(cors());
export const CreateUsers = middyfy(UserController.createUsers).use(cors());
export const DropUsers = middyfy(UserController.dropUsers).use(cors());
export const UpdateUsers = middyfy(UserController.updateUsers).use(cors());
export const GetUser = middyfy(UserController.getUser).use(cors());
