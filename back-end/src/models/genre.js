const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.ObjectId
    },
    name: {
        type: String
    }
});

const genre = mongoose.model('genre', genreSchema);
module.exports = genre;