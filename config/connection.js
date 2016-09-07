/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
// 
// mysql database
var mysql      = require('mysql');
var connectionConfig;

// if (process.env.JAWSDB_URL){
//   connectionConfig = process.env.JAWSDB_URL;
// }  else {
//     connectionConfig = {
//       port: 3306,
//       host: 'localhost',
//       user: 'root',
//       password: 'tom',
//      database: 'burgers_db'
//    }
// }

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

// var connection = mysql.createConnection(connectionConfig);
var connection = {};

// connection.connect(function(err) {
//   if (err) {
//     console.error('MySQL error connecting: ' + err.stack);
//     return;
//   };

//   console.log('MySQL connected as id ' + connection.threadId);
// })

module.exports = connection;