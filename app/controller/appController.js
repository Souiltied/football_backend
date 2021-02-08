const game = require('../model/gameModel');
const season = require('../model/seasonModel');

exports.showAllSeasons = function(req, res) {
    season.getAllSeason(function(error, season) {
        console.log('controller')
        if(error){
            res.send(error);
            console.log('res', season);
        } else{
            res.send(season);
        }
    })
}

exports.showSimpleGamesBySeasonId = function(req, res) {
    game.getSimpleGamesbySeasonId(req.params.seasonId, function(error, game) {
        if(error){
            res.send(error);
        } else {
            res.json(game);
        }
    });
};


exports.showAllGamesBySeasonId = function(req, res) {
    game.getAllGamesbySeasonId(req.params.seasonId, function(error, game) {
        if(error){
            res.send(error);
        } else {
            res.json(game);
        }
    });
};

exports.addNotes = async function(req, res) {
    game.setGameNote(req.body, function(error, game) {
        if(error){
            res.send(error);
        } else {
            res.json(game);
        }
    });
};