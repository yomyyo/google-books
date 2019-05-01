//use the express router
const router = require("express").Router();

//require the bookController file
const bookController = require("../../controllers/bookController");

//on the / route, either get all books, or create books
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

//on route /id either, get book by id, update a book with that id, or delete the book with that id
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

//export to use later
module.exports = router;
