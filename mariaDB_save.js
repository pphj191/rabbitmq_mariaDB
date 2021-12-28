
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'admin',
    database : 'testdb'
});

connection.connect();

connection.query('SELECT * FROM users WHERE user_id <= 4 && user_id>1', function(error, results, fields){
    if (error) {
        console.log(error);
    }
    console.log(results);
    console.log(results[1].ID);
});

// connection.query('INSERT INTO users (user_name) VALUES ("kim");', function(error, results, fields){
//     if (error) {
//         console.log(error);
//     }
//     console.log(results);
//     // console.log(results[1].ID);
// });

connection.end()