//require path, router, books, and google api routes
const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

//use the book route
router.use("/books", bookRoutes);

//use the google route
router.use("/google", googleRoutes);

//export to use 
module.exports = router;
