var mongoose = require('mongoose');
var bookSchema = require('./book.js');

var AuthorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    books: [bookSchema]
})


// defining the author schema to that model
var Author = mongoose.model("Author", AuthorSchema);

//make this available to our other filesc
module.exports = Author
