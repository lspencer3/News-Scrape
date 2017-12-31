var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");

var PORT = 3000;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

require("./controllers/articlescaper")(app)
// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
