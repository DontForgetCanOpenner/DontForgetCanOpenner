var express = require("express");
var dateFormat = require('dateformat');

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger  = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log("The / route got called.");
    res.render("index");
  });
});


// Export routes for server.js to use.
module.exports = router;