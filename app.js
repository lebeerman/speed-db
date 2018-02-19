const express = require('express');
const logger = require('morgan');
const database = require('./database-connection');

const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());

// Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('*', (req, res) =>
//   res.status(200).send({
//     message: 'Welcome to the beginning of nothingness.'
//   })
// );

// Adding basic routes for CRUD
app.get('/', (req, res) => 
  database('speed1').select('*').then(items => {
    res.send({items});
  })
);

app.post('/', (req, res) =>
  database('speed1')
    .insert(req.body.name)
    .then(() => {
      res.sendStatus(201);
    })
);

app.delete('/', (req, res) =>
  database('speed1')
    .del(req.body.name)
    .then(() => {
      res.send('DELETED!');
    })
);

app.listen(process.env.PORT || 3000);