//require mongoose orm
const mongoose = require("mongoose");

//create a new mongoose schema
const Schema = mongoose.Schema;

//a new mongo schema, with title, subtitle, authors, link, descriptions, imaage, and googleId
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

//create a new Book, with the name Book using the bookSchema
const Book = mongoose.model("Book", bookSchema);

//export the book to use
module.exports = Book;
