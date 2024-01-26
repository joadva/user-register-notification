import UserSchema from "../schema/UserSchema";

class UserTransformer {
  static transform(): Record<string, string> {
    throw new Error("This method is not implement yet.");
  }

  static reverse(model): UserSchema {
    const user = new UserSchema();

   user.first_name = model.first_name;
   user.last_name = model.last_name;
   user.address= model.address
   user.email=model.email
   user.age= model.age
  
    return user;
  }
}

export default UserTransformer;