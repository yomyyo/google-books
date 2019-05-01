//require axios to read apis
const axios = require("axios");

//access to the database
const db = require("../models");

//export these functions
module.exports = {
  
  //find all books with a certain query
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      //get the api length 
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })

      //then filter for certain parts of the book
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      //then find books in the database that match
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      //then send the json 
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};
