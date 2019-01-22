//'use strict';
/* DB CONNECTION */
var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

/*   // OLD CONNECTION //
var connection = mysql.createConnection({
  host: 'friends.cidfwkcbph8b.us-west-1.rds.amazonaws.com',
  user: 'friends',
  password: 'hack22!Q',
  database: 'friends'
});

connection.connect(function(err) {
  if (err) { throw err; }
  console.log('You are now connected...');
});
*/

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT,
  database : process.env.RDS_DB_NAME
});

connection.connect(function(err) {
  if (err) {
    // console.log('what host: ', process.env.RDS_HOSTNAME);
    // console.log('what user: ', process.env.RDS_USERNAME);
    // console.log('what password: ', process.env.RDS_PASSWORD);
    // console.log('what port: ', process.env.RDS_PORT);
    // console.log('what db: ', process.env.RDS_DB_NAME);
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

//connection.end();


module.exports.connection = connection;