const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((request, response, next) => {
  // currently set to only accept any request from singular domain. The actual  
  // frontend dev enviroment. Will add/remove as is required through lifecycle.
    // response.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Content-Disposition");
    response.header("Access-Control-Expose-Headers", "Content-Disposition");
    next();
  });

port = process.env.port || 3000;

const mc = mysql.createConnection({
    host: '35.242.154.40',
    user: 'root',
    password: 'w1ll18m2287',
    database: 'db_football_stats',
    dialect: "mysql",
    port: 3306
});

mc.connect();

console.log('API server started on: ' + port);
  
require("./app/routes/appRoutes")(app);

app.listen(port);