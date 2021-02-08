const mySql = require('mysql');
const sql = require('./db.js');

var Game = function(game){
    this.SeasonID = game.seasonId;
    this.Date = game.date;
    this.HomeTeam = game.HomeTeam;
    this.AwayTeam = game.AwayTeam;
    this.FTHG = game.FTHG;
    this.FTAG = game.FTAG; 
    this.FTR = game.FTR;
    this.HTHG = game.HTHG; 
    this.HTAG = game.HTAG;
    this.HTR = game.HTR; 
    this.Referee = game.Referee; 
    this.HS = game.HS;
    this.AS = game.AS;
    this.HST  = game.HST;
    this.AST = game.AST;
    this.HF = game.HF;
    this.AF = game.AF;
    this.HC = game.HC;
    this.AC = game.AC;
    this.HY = game.HY;
    this.AY = game.AY;
    this.HR = game.HR;
    this.AR = game.AR;
    this.B365H = game.B365H;
    this.B365D = game.B365D;
    this.B365A = game.B365A;
    this.BWH = game.BWH;
    this.BWD = game.BWD;
    this.BWA = game.BWA;
    this.GBH = game.GBH;
    this.GBD = game.GBD;
    this.GBA = game.GBA;
    this.IWH = game.IWH;
    this.IWD = game.IWD;
    this.IWA = game.IWA;
    this.LBH = game.LBH;
    this.LBD = game.LBD;
    this.LBA = game.LBA;
    this.SBH = game.SBH;
    this.SBD = game.SBD;
    this.SBA = game.SBA;
    this.WHH = game.WHH;
    this.WHD = game.WHD;
    this.WHA = game.WHA;
    this.SJH = game.SJH;
    this.SJD = game.SJD;
    this.SJA = game.SJA;
    this.VCH = game.VCH;
    this.VCD = game.VCD;
    this.VCA = game.VCA;
    this.BSH = game.BSH;
    this.BSD = game.BSD;
    this.BSA = game.BSA;
    this.Bb1X2 = game.Bb1X2;
    this.BbMxH = game.BbMxH;
    this.BbAvH = game.BbAvH;
    this.BbMxD = game.BbMxD;
    this.BbAvD = game.BbAVD;
    this.BbMxA = game.BbMxA;
    this.BbAvA = game.BbAvA;
    this.BbOU = game.BbOU;
    this.BbMxLessThanTwoFive = game.BbMxLessThanTwoFive;
    this.BbAvLessThanTwoFive = game.BbAvLessThanTwoFive; 
    this.BbMxMoreThanTwoFive = game.BbMxMoreThanTwoFive;
    this.BbAvMoreThanTwoFive = game.BbAvMoreThanTwoFive;
    this.BbAH = game.BbAH;
    this.BbAHh = game.BbAHh; 
    this.BbMxAHH = game.BbMxAHH
    this.BbAvAHH = game.BbAvAHH
    this.BbMxAHA = game.BbMxAHA
    this.BbAvAHA = game.BbAvAHA
    this.PSCH = game.PSCH
    this.PSCD = game.PSCD
    this.PSCA = game.PSCA
};

Game.getSimpleGamesbySeasonId = function(SeasonId, result){
    sql.query("SELECT SeasonId, Date, HomeTeam, FTHG, AwayTeam, FTAG, Referee, Note FROM Game WHERE SeasonID = " + SeasonId + " order by Date desc", function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
              console.log("res = ", res);
             count = res.length;
             res.splice(0, 0, {'count': count});
               result(null, res);
                  }
              }); 
  };

Game.getAllGamesbySeasonId = function(SeasonId, result){
    sql.query("SELECT * FROM Game WHERE SeasonID = " + SeasonId + " order by Date desc", function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
               console.log("res = ", res);
               count = res.length;
               res.splice(0, 0, {'count': count});
               result(null, res);
                  }
              }); 
  };

Game.setGameNote = function(game, result){
    sql.query("UPDATE Game SET Note = " + "'" + game.Note + "'" + "  WHERE Date=" + "'" + game.Date + "'" + " AND HomeTeam=" + "'" + game.HomeTeam + "'" + " AND AwayTeam=" + "'" + game.AwayTeam + "'" + " AND Referee=" + "'" + game.Referee + "'" + " AND SeasonId=" + game.SeasonId, function (err, res) {
      if(err) {
          console.log("error: ", err);
            result(null, err);
         }
       else{   
         console.log("res = ", res);
         result(null, res);
            }
        }); 
};




  module.exports = Game;