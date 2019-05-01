//use express router
const router = require("express").Router();

//use the googleController file
const googleController = require("../../controllers/googleController");

//on the / route, findall books from google books api
router
  .route("/")
  .get(googleController.findAll);

//export to use
module.exports = router;
