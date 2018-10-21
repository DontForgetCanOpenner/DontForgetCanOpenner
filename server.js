// *** Dependencies
// =============================================================
var express        = require("express");
var methodOverride = require("method-override");
var bodyParser     = require("body-parser");

var PORT = process.env.PORT || 3000;

// Sets up the Express App
// =============================================================
var app = express();
var apphurricane = express();

// Static directory
app.use(express.static("public"));
apphurricane.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
var routes = require("./controllers/controller.js");

app.use("/", routes);
apphurricane.use("/about/hurricane", routes);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
// Syncing our sequelize models and then starting our Express app
// =============================================================
/*
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
*/