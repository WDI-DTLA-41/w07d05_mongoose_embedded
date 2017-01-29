var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  title: String,
  year: Date
});

module.exports = bookSchema
