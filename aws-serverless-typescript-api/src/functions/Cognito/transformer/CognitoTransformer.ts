import CognitoSchema from "../schema/CognitoSchema";

class CognitoTransformer {
  static transform(): Record<string, string> {
    throw new Error("This method is not implement yet.");
  }

  static reverse(model): CognitoSchema {
    const cognito = new CognitoSchema();

    cognito.email=model.email
    cognito.password=model.password
   
    return cognito;
  }
}

export default CognitoTransformer;