if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const express = require('express');
const http = require('http');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

// Router
var router = require('./routes.js');

const app = express();
var request = require('request');
var db = require('../db/index');

// change to env 
const port = process.env.PORT || 3003;
// var ip = '127.0.0.1';

http.createServer(app).listen(port, function () {
  console.log('Listening on Port ' + port);
});

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
// create application/json parser
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: false }));

// Set up our routes
app.use(router);

app.get('/', function (req, res) {
  res.status(200).send('GET request from the homepage');
})



