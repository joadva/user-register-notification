import type { AWS } from '@serverless/typescript';

import * as Functions from '@functions/index';

const serverlessConfiguration: AWS = {
  service: 'aws-serverless-typescript-api',
  frameworkVersion: '3',
  plugins: ['serverless-auto-swagger','serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    region: 'us-east-1',
    runtime: 'nodejs18.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    layers: ["arn:aws:lambda:us-east-1:975050312452:layer:CommonModules:1"],
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      AWS_RDS_DBNAME: '',
      AWS_RDS_PASSWORD: '',
      AWS_RDS_USERNAME:'',
      AWS_RDS_HOST: '',
      AWS_RDS_DIALECT: '',
      AWS_RDS_PORT: '',
      COGNITO_CLIENT_ID: '',
      COGNITO_USER_POOL_ID: '',
      EMAIL_SEND: '',
      EMAIL_FROM:'',
      AWS_REGION:'',
      PASSWORD_EMAIL_FROM:'',
    },
  },
  // import the function via paths
  functions: { ...Functions },
  package: { individually: true },
  custom: {
    // autoswagger:{
    //   typefiles:['./src/types/api-types.d.ts'],
    //   apiKeyHeaders: ['Authorization'],
    //   title: 'Crud Admin Documentation',
    // },
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    
  },
  resources: {
    Resources: {
      CognitoUserPool: {
        Type: 'AWS::Cognito::UserPool',
        Properties: {
          UserPoolName: 'user-pool',
          UsernameAttributes: ['email'],
          AutoVerifiedAttributes: ['email'],
        },
      },
      CognitoUserPoolClient: {
        Type: 'AWS::Cognito::UserPoolClient',
        Properties: {
          ClientName: 'user-pool-client',
          UserPoolId: { Ref: 'CognitoUserPool' },
          ExplicitAuthFlows: ['USER_PASSWORD_AUTH'],
          GenerateSecret: false,
        },
      },
    },
  },

};

module.exports = serverlessConfiguration;
