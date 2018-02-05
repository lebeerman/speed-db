const express = require('express');
const app = express();
const queries = require('./queries');
const bodyParser = require('body-parser');

app.use(bodyParser.json());




app.get('/', (res, req)=>{
   queries
     .list()
     .then(res => {
       res.json({ res });
     })
     .catch(console.error);
})