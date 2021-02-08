module.exports = (app) => {
    const appReceives = require("../controller/appController");

    app.get('/api/v0/seasons', appReceives.showAllSeasons);

    app.get('/api/v0/simple/seasonId/:seasonId', appReceives.showSimpleGamesBySeasonId);

    app.get('/api/v0/all/seasonId/:seasonId', appReceives.showAllGamesBySeasonId);

    app.post('/api/v0/game/note', appReceives.addNotes)

    // app.route('/season/add/Notes')
    //     .post(appReceives.addNotes)

};