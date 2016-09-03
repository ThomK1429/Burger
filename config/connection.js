/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
// 
// mysql database
var mysql      = require('mysql');
var connectionConfig;

if (process.env.NODE_ENV){
  connectionConfig = process.env.JAWSDB_URL;
}  else {
  connectionConfig = {
    port: 3306,
    host: 'uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'lwmb8m84f0vlaxbi',
    password: 'bhfgqy7un9dvqtgk',
    database: 'burgers_db'
  }
}

//if (process.env.NODE_ENV){
// connectionConfig = process.env.JAWSDB_URL;
//}  else {
//  connectionConfig = {
//    port: 3306,
//    host: 'localhost',
//    user: 'root',
//    password: 'tom',
//    database: 'burgers_db'
//  }
//}

var connection = mysql.createConnection(connectionConfig);

connection.connect(function(err) {
  if (err) {
    console.error('MySQL error connecting: ' + err.stack);
    return;
  };

  console.log('MySQL connected as id ' + connection.threadId);
})

module.exports = connection;