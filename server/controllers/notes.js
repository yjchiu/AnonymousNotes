var mongoose = require('mongoose');
var Note = mongoose.model('note');

module.exports = {
    index:function(req,res){
        console.log("inside index");
        Note.find({}).sort('-created_at').exec(function(err,data){
            res.json(data);
        })
    },
    create:function(req,res){
        console.log("inside server create function");
        console.log('server side create function: ', req.body);
        var note = new Note(req.body);
        note.save(function(err){
            res.json(true);
        })
    }
}