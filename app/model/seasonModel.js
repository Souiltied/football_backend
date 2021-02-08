const mySql = require('mysql');
const sql = require('./db.js');

var Season = function(season){
    this.seasonId = season.seasonId;
    this.seasonName = season.name;
};

Season.getAllSeason = function (result) {
    sql.query("Select id, name from Season", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('tasks : ', res);  
                

             result(res);
            }
        });   
};

module.exports = Season;