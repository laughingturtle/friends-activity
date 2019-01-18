/* DB CONNECTION */
var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'friends.cidfwkcbph8b.us-west-1.rds.amazonaws.com',
  user: 'friends',
  database: 'hack22!Q'
});

connection.connect(function(err) {
  if (err) { throw err; }
  console.log('You are now connected...');
});

module.exports.connection = connection;