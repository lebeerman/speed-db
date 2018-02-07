## How fast and how little is needed to get a DB and Express server hooked up and deployed?! 

1. git init / initial commit  
1. npm init --yes
1. install express, knex, pg, morgan, body-parser, etc etc etc
1. knex init 
1. edit knexfile.js to specify development db settings, and knex.js to setup config, etc
1. run a migration! knex migrate:make [migration name]
1. 


KYLE
make the directory 
npm init
save express body parser cors knex pg
app.js --> const express, app, app.listen(process.env.PORT || 3000), app.get( /, (res, req)=> ())
package.json --> add start command (start: node app.js)
knex init
edit knex.js  --> remove boiletplate, keep dev:{}
createdb speedrun
knex migrate:make <migration name>
in migration name.js knex.schema.createTable("person", person =>{ person.increments();...})
                    exports.down 
knex migrate:latest
knex seed:make 01speed
edit seed file --> do what you want here... 
knex seed:run
CHECK THE DB - psql, select * from db
database_connection.js ---> const config = require("./knexfile)

knex.js const database = require('database-connection.js'), database('table name').select().then(people=> {response.send({people})})

app.post("/",(req,res)=> {
  database("person").insert({request.body.name}).then(()=> {
    response.sendStatus(201);
  })
})
https://medium.com/@HalahSalih/how-to-deploy-an-express-app-to-heroku-with-postgresql-database-using-git-266e100d59ff
https://medium.com/@HalahSalih/project-settings-for-an-express-app-with-knex-16959517b53b
https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize