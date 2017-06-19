var notecontroller = require('./../controllers/notes.js');

module.exports = function(app){
    app.get('/notes',notecontroller.index);
    app.post('/new',notecontroller.create);
    app.all('*', (req,res,next) => {
        res.sendfile(path.resolve("./../public/dist/index.html"))
    });
}