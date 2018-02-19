## How fast and how little is needed to get a DB and Express server hooked up and deployed?! 
--------
### KYLES PROCESS!

- make the directory 

  `mkcd speed-run` or `take speed-run`

- creat the package.json

  `npm init`

- install all the dependencies

  `save express body parser cors knex pg`

- create app.js --> add the code

  ```
  const express = require('express');
  const app = express();
  app.listen(process.env.PORT || 3000);
  app.get( /, (res, req)=> ());
  ```

- in the package.json --> add start command 

  `start: node app.js`

- create a knex file and pull out unneeded boilerplate

  `knex init`, make edits to boilerplate code, keep dev:{}

- create a database and a kne migration

  `createdb speedrun`
  `knex migrate:make <migration name>`

- edit the migration boilerplate to reflect the changes/your actual database files.

  ```
  exports.up = function(knex, Promise) {
    return knex.schema.createTable("person", person => { 
    person.increments();...
    });
  };
  exports.down = function(knex, Promise) {
    return knexschema.dropTableIfExists('person');
  };
  ```
- run new migrations

  `knex migrate:latest`
  `knex seed:make <01speed>`

- edit seed file --> do what you want here... raw queries, short stuff... whatever you want the table to look like.

  `knex seed:run`

- CHECK THE DB -

  `psql`, `SELECT * FROM <db_name>`

- database_connection.js add the stuff in app.js, etc... wire things up. ---> const config = require("./knexfile)
  
  knex.js 
  ```
  const database = require('database-connection.js');
  database('table name').select().then(people => {response.send({people})});
  const bodyParser = require('body-parser');

  app.use(bodyParser.json());
  
  app.get('/', (request, response) => {
    database('<database-name>').select().then(people => {
      response.send({people});
    })
  })

  app.post("/",(req,res)=> {
    database("person").insert({request.body.name}).then(()=> {
      response.sendStatus(201);
    })
  });
  ```
---

### Reference Materials

https://medium.com/@HalahSalih/how-to-deploy-an-express-app-to-heroku-with-postgresql-database-using-git-266e100d59ff
https://medium.com/@HalahSalih/project-settings-for-an-express-app-with-knex-16959517b53b
https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize