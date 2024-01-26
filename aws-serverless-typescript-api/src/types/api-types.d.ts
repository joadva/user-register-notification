export interface User {
  success: boolean;
  response: {
    first_name: string;
    last_name: string;
    email: string;
    address: string;
    age: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Error422 {
  success: boolean;
  message: string;
  response: string;
}
export interface Error404 {
  error: string;
}

export interface UserDelete {
    success: boolean;
    response: {
      first_name: string;
      last_name: string;
      email: string;
      address: string;
      age: number;
      createdAt: string;
      updatedAt: string;
    };
    message: string;
  }

  export interface CognitoRegister {
    success: boolean;
    message: string;
  }

  export interface CognitoError {
    success: boolean;
    error: string;
    message:string;
  }

  export interface CognitoLogin {
    success: boolean;
    data:{
        AccessToken:string;
    }
  }

  export interface CognitoBody {
    email:string;
    password:string;
  }