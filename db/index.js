//'use strict';
/* DB CONNECTION */
var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'friends'
// });

// connection.connect(function(err) {
//   if (err) { throw err; }
//   console.log('You are now connected...');
// });


var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT,
  database : process.env.RDS_DB_NAME
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});


module.exports.connection = connection;