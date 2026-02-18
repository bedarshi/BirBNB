const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'bony@63336',
  database: 'airbnb'
});

module.exports = pool.promise();