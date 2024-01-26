import {handlerPath} from '@libs/handler-resolver';

export const login= {
    handler: `${handlerPath(__dirname)}/controller/CognitoController.Login`,
    description: 'lambda for login client',
    events: [
      {
        http: {
          method: 'post',
          path:  'login',
          cors: true,
          // responses:{
          //   200:{
          //     description: 'login cognito users',
          //     bodyType: 'CognitoLogin'
          //   },
          //   500:{
          //     description: 'no user exist',
          //     bodyType: 'CognitoError'
          //   }
          // },
          // bodyType:'CognitoBody',
        },
      },
    ],
  };


  export const register= {
    handler: `${handlerPath(__dirname)}/controller/CognitoController.Register`,
    description: 'lambda for register client',
    events: [
      {
        http: {
          method: 'post',
          path:  'register-cognito',
          cors: true,
          // bodyType:'CognitoBody',
          // responses:{
          //   201:{
          //     description: 'register cognito users',
          //     bodyType: 'CognitoLogin'
          //   },
          //   500:{
          //     description: 'given email exist',
          //     bodyType: 'CognitoError'
          //   }}
        },
      },
    ],
  };
