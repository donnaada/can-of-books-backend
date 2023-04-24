'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {type: String, required: true}, // String is shorthand for {type: String}
  description: {type: String, required: true},
  status: {type: String, required: true},
});

const Book = mongoose.model('Book', bookSchema)

module.exports = Book