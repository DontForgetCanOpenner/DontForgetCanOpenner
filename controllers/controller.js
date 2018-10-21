var express = require("express");
var path = require("path");

var router = express.Router();

router.get("/about/hurricane", function(req, res) {
  console.log("The /about/hurricane route got called.");
    res.sendFile(path.join(__dirname, "../public/about/hurricane.html"));
  });

router.get("/about/wildfires", function(req, res) {
  console.log("The /about/wildfires route got called.");
    res.sendFile(path.join(__dirname, "../public/about/wildfires.html"));
  });

router.get("/about/tornado", function(req, res) {
  console.log("The /about/tornado route got called.");
    res.sendFile(path.join(__dirname, "../public/about/tornado.html"));
  });

router.get("/about/earthquake", function(req, res) {
  console.log("The /about/earthquake route got called.");
    res.sendFile(path.join(__dirname, "../public/about/earthquake.html"));
  });

router.get("/about/flood", function(req, res) {
  console.log("The /about/flood route got called.");
    res.sendFile(path.join(__dirname, "../public/about/flood.html"));
  });

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log("The / route got called.");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });


// Export routes for server.js to use.
module.exports = router;