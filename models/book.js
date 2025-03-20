

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);

// Model book
/*const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Type.ObjectId, ref: 'Author'},
    publischedYear: Number,
    genre: String
});

const Book= mongoose.model( 'Book', bookSchema);*/
 