// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  /*
  app.get("/cosa", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cosa.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
*/
  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/all.html"));
  });

  app.get("/edit", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/edit.html"));
  });

  app.get("/csv", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/csv.html"));
  });

  app.get("/people", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/people.html"));
  });

};
