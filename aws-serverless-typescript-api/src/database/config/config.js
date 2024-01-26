module.exports =   {
    "development": {
      "username": process.env.AWS_RDS_USERNAME,
      "password": process.env.AWS_RDS_PASSWORD,
      "database": process.env.AWS_RDS_DBNAME,
      "host": process.env.AWS_RDS_HOST,
      "dialect": process.env.AWS_RDS_DIALECT,
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }