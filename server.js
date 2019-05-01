// require express for server
const express = require("express");

// require mongoose orm
const mongoose = require("mongoose");

// require routes from routes folder
const routes = require("./routes");

// create a new express app
const app = express();

// if we are in production, use production port, otherwise use port 3001
const PORT = process.env.PORT || 3001;

// middleware functions

//decode url because it is in plain text
app.use(express.urlencoded({ extended: true }));
//convert to json
app.use(express.json());

//if we are in production, use the client/build folder for the base folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// use the routes we defined
app.use(routes);

// connect to mongodb
mongoose.connect(
  //either use production or local mongodb
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// listen on the port
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
