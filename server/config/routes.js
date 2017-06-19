var notecontroller = require('./../controllers/notes.js');

module.exports = function(app){
    app.get('/notes',notecontroller.index);
    app.post('/new',notecontroller.create);
}