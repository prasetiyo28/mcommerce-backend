require('dotenv').config();
module.exports = {
    "development": {
      "username": process.env.DATABASE_USER,
      "password": process.env.PASSWORD,
      "database": process.env.DATABASE_NAME,
      "host": process.env.HOST,
      "dialect": "mysql",
      "operatorsAliases": false
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "operatorsAliases": false
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "operatorsAliases": false
    }
  
  
}