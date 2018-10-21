var express = require("express");
var path = require("path");

var router = express.Router();

router.get("/about/hurricane", function(req, res) {
  console.log("The /about/hurricane route got called.");
    res.sendFile(path.join(__dirname, "../public/about/hurricane.html"));
  });

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log("The / route got called.");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });


// Export routes for server.js to use.
module.exports = router;