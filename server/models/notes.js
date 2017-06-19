var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    content : String,
}, { timestamps: { createdAt: 'created_at' } })


mongoose.model('note', NoteSchema);
