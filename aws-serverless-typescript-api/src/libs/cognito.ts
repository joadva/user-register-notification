import {
  AdminConfirmSignUpCommand,
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  InitiateAuthCommandOutput,
  SignUpCommand,
  SignUpCommandOutput,
} from "@aws-sdk/client-cognito-identity-provider";

import { CognitoRegisterInterface } from "../functions/Cognito/interface/CognitoRegisterInterface";

export class CognitoAws {
  client: CognitoIdentityProviderClient;
  clientSecret: string;
  ClientId: string;
  UserPoolId: string;
  constructor() {
    this.client = new CognitoIdentityProviderClient({
      region: process.env.AWS_REGION,
    });
    this.ClientId =
      (process.env.COGNITO_CLIENT_ID as string);
    this.UserPoolId =
      (process.env.COGNITO_USER_POOL_ID as string);
  }

  async cognito_login(Username, Password): Promise<InitiateAuthCommandOutput> {

    const command2 = new InitiateAuthCommand({
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: this.ClientId,
      AuthParameters: {
        USERNAME: Username,
        PASSWORD: Password,
      },
    });
    return await this.client.send(command2);
  }

  async cognito_register(
    input: CognitoRegisterInterface
  ): Promise<SignUpCommandOutput> {
    let command = new SignUpCommand({
      ClientId: this.ClientId,
      Password: input.password,
      Username: input.email,
      UserAttributes: [{ Name: "email", Value: input.email }],
    });
    return await this.client.send(command);
  }

  async admin_user_confirm(username: string) {
    const command = new AdminConfirmSignUpCommand({
      UserPoolId: this.UserPoolId,
      Username: username,
    });
    return await this.client.send(command);
  }
}
