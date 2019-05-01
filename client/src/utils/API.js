//require axios to read api
import axios from "axios";

//export 
export default {
  //get books from google api
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  //get saved books from database
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  //delete book from database
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  //save a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
