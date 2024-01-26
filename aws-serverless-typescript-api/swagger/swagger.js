// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "aws-serverless-typescript-api",
    "version": "1"
  },
  "paths": {
    "/hello": {
      "post": {
        "summary": "hello",
        "description": "",
        "operationId": "hello.post.hello",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/users": {
      "get": {
        "summary": "getUsers",
        "description": "",
        "operationId": "getUsers.get./users",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      },
      "post": {
        "summary": "createUsers",
        "description": "",
        "operationId": "createUsers.post./users",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/users/{id}": {
      "delete": {
        "summary": "dropUsers",
        "description": "",
        "operationId": "dropUsers.delete.users/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      },
      "get": {
        "summary": "getUserById",
        "description": "",
        "operationId": "getUserById.get.users/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      },
      "put": {
        "summary": "updateUsers",
        "description": "",
        "operationId": "updateUsers.put.users/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/login": {
      "post": {
        "summary": "login",
        "description": "",
        "operationId": "login.post.login",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/register-cognito": {
      "post": {
        "summary": "register",
        "description": "",
        "operationId": "register.post.register-cognito",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    }
  },
  "definitions": {
    "User": {
      "properties": {
        "success": {
          "title": "User.success",
          "type": "boolean"
        },
        "response": {
          "properties": {
            "first_name": {
              "title": "User.response.first_name",
              "type": "string"
            },
            "last_name": {
              "title": "User.response.last_name",
              "type": "string"
            },
            "email": {
              "title": "User.response.email",
              "type": "string"
            },
            "address": {
              "title": "User.response.address",
              "type": "string"
            },
            "age": {
              "title": "User.response.age",
              "type": "number"
            },
            "createdAt": {
              "title": "User.response.createdAt",
              "type": "string"
            },
            "updatedAt": {
              "title": "User.response.updatedAt",
              "type": "string"
            }
          },
          "required": [
            "first_name",
            "last_name",
            "email",
            "address",
            "age",
            "createdAt",
            "updatedAt"
          ],
          "additionalProperties": false,
          "title": "User.response",
          "type": "object"
        }
      },
      "required": [
        "success",
        "response"
      ],
      "additionalProperties": false,
      "title": "User",
      "type": "object"
    },
    "Error422": {
      "properties": {
        "success": {
          "title": "Error422.success",
          "type": "boolean"
        },
        "message": {
          "title": "Error422.message",
          "type": "string"
        },
        "response": {
          "title": "Error422.response",
          "type": "string"
        }
      },
      "required": [
        "success",
        "message",
        "response"
      ],
      "additionalProperties": false,
      "title": "Error422",
      "type": "object"
    },
    "Error404": {
      "properties": {
        "error": {
          "title": "Error404.error",
          "type": "string"
        }
      },
      "required": [
        "error"
      ],
      "additionalProperties": false,
      "title": "Error404",
      "type": "object"
    },
    "UserDelete": {
      "properties": {
        "success": {
          "title": "UserDelete.success",
          "type": "boolean"
        },
        "response": {
          "properties": {
            "first_name": {
              "title": "UserDelete.response.first_name",
              "type": "string"
            },
            "last_name": {
              "title": "UserDelete.response.last_name",
              "type": "string"
            },
            "email": {
              "title": "UserDelete.response.email",
              "type": "string"
            },
            "address": {
              "title": "UserDelete.response.address",
              "type": "string"
            },
            "age": {
              "title": "UserDelete.response.age",
              "type": "number"
            },
            "createdAt": {
              "title": "UserDelete.response.createdAt",
              "type": "string"
            },
            "updatedAt": {
              "title": "UserDelete.response.updatedAt",
              "type": "string"
            }
          },
          "required": [
            "first_name",
            "last_name",
            "email",
            "address",
            "age",
            "createdAt",
            "updatedAt"
          ],
          "additionalProperties": false,
          "title": "UserDelete.response",
          "type": "object"
        },
        "message": {
          "title": "UserDelete.message",
          "type": "string"
        }
      },
      "required": [
        "success",
        "response",
        "message"
      ],
      "additionalProperties": false,
      "title": "UserDelete",
      "type": "object"
    },
    "CognitoRegister": {
      "properties": {
        "success": {
          "title": "CognitoRegister.success",
          "type": "boolean"
        },
        "message": {
          "title": "CognitoRegister.message",
          "type": "string"
        }
      },
      "required": [
        "success",
        "message"
      ],
      "additionalProperties": false,
      "title": "CognitoRegister",
      "type": "object"
    },
    "CognitoError": {
      "properties": {
        "success": {
          "title": "CognitoError.success",
          "type": "boolean"
        },
        "error": {
          "title": "CognitoError.error",
          "type": "string"
        },
        "message": {
          "title": "CognitoError.message",
          "type": "string"
        }
      },
      "required": [
        "success",
        "error",
        "message"
      ],
      "additionalProperties": false,
      "title": "CognitoError",
      "type": "object"
    },
    "CognitoLogin": {
      "properties": {
        "success": {
          "title": "CognitoLogin.success",
          "type": "boolean"
        },
        "data": {
          "properties": {
            "AccessToken": {
              "title": "CognitoLogin.data.AccessToken",
              "type": "string"
            }
          },
          "required": [
            "AccessToken"
          ],
          "additionalProperties": false,
          "title": "CognitoLogin.data",
          "type": "object"
        }
      },
      "required": [
        "success",
        "data"
      ],
      "additionalProperties": false,
      "title": "CognitoLogin",
      "type": "object"
    },
    "CognitoBody": {
      "properties": {
        "email": {
          "title": "CognitoBody.email",
          "type": "string"
        },
        "password": {
          "title": "CognitoBody.password",
          "type": "string"
        }
      },
      "required": [
        "email",
        "password"
      ],
      "additionalProperties": false,
      "title": "CognitoBody",
      "type": "object"
    }
  },
  "securityDefinitions": {}
};