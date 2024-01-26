import {handlerPath} from '@libs/handler-resolver';
export const getUsers = {
  handler: `${handlerPath(__dirname)}/controller/UserController.GetUsers`,
  events:[
    {
      http: {
        method: 'get',
        path:'/users',
        cors: true,
      //   responses:{
      //     200:{
      //       description: 'retreive users from database',
      //       bodyType: 'User'
      //     },
      //   },
       
      //   queryStringParameters: {
      //     first_name: {
      //         required: false,
      //         type: 'string',
      //         description: 'name of the user',
      //     },
      //     age: {
      //         required: false,
      //         type: 'integer',
      //         debugDescription: 'age of the user',
      //     },
      // },
      }
    }
  ]
};

export const createUsers: any = {
  handler: `${handlerPath(__dirname)}/controller/UserController.CreateUsers`,
  events:[
    {
      http: {
        method: 'post',
        path:'/users',
        cors: true,
    //     responses:{
    //       201:{
    //         description: 'retreive users from database',
    //         bodyType: 'User'
    //       },
    //       422:{
    //         description: 'error validation',
    //         bodyType: 'Error422'
    //       }
    //     },
    //     bodyType: 'User',
       }
     }
  ]
};



export const getUserById = {
  handler: `${handlerPath(__dirname)}/controller/UserController.GetUser`,
  description: 'lambda for get by pk result status',
  events: [
    {
      http: {
        method: 'get',
        path: 'users/{id}',
        cors:true,
        // responses:{
        //   200:{
        //     description: 'retreive user from database',
        //     bodyType: 'User'
        //   },
        //   404:{
        //     description: 'error no user found',
        //     bodyType: 'Error422'
        //   }
        // },
      },
    },
  ],
};



export const dropUsers = {
  handler: `${handlerPath(__dirname)}/controller/UserController.DropUsers`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'users/{id}',
        cors: true,
        // responses:{
        //   200:{
        //     description: 'Delete user from database',
        //     bodyType: 'UserDelete'
        //   },
        //   404:{
        //     description: 'error no user found',
        //     bodyType: 'Error422'
        //   }
        // }
      },
    },
  ],
};


export const updateUsers = {
  handler: `${handlerPath(__dirname)}/controller/UserController.UpdateUsers`,
  events: [
    {
      http: {
        method: 'put',
        path: 'users/{id}',
        cors: true,
        // responses:{
        //   200:{
        //     description: 'Delete user from database',
        //     bodyType: 'User'
        //   },
        //   404:{
        //     description: 'error no user found',
        //     bodyType: 'Error422'
        //   }
        // }
      },
    },
  ],
};
