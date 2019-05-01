// require the path
const path = require("path");

//require express router
const router = require("express").Router();

//require the files from the api folder
const apiRoutes = require("./api");

//use api folder from api routes
router.use("/api", apiRoutes);

// route to index.html page
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

//export router to use in other files
module.exports = router;
