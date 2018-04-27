// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/cosa", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Seiu_city_email_tbl.findAll({}).then(function(dbCosa) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbCosa);
    });
  });
  app.get("/api/home", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Seiu_personal_tbl.findAll({}).then(function(dbHome) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbHome);
    });
  });
  // Get rotue for retrieving a single post
  app.get("/api/all/:seiu_personal_id", function(req, res) {
    db.Seiu_personal_tbl.findOne({
      where: {
        seiu_personal_id: req.params.seiu_personal_id
      }
    })
    .then(function(dbHome) {
      res.json(dbHome);
    });
  });
  app.get("/api/people", function(req, res) {
    db.Cosa_seiu_tbl.findAll({}).then(function(dbPeople) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbPeople);
    });
  });
};
