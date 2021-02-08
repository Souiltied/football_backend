const mySql = require('mysql');

// cloud database
var connection = mySql.createConnection({
    host: '35.242.154.40',
    user: 'root',
    password: 'w1ll18m2287',
    database: 'db_football_stats',
    dialect: "mysql",
    port: 3306
});

connection.connect((error) => {
    if(error){
        throw error;
    }
});

module.exports = connection;