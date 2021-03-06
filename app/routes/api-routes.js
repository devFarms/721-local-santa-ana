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
  // Get rotue for retrieving a single post
  app.get("/api/people/:cosa_seiu_id", function(req, res) {
    db.Cosa_seiu_tbl.findOne({
      where: {
        cosa_seiu_id: req.params.cosa_seiu_id
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

  // PUT route for updating posts
  app.put("/api/people", function(req, res) {
    db.Cosa_seiu_tbl.update(req.body,
      {
        where: {
          cosa_seiu_id: req.body.cosa_seiu_id
        }
      })
    .then(function(dbPeople) {
      res.json(dbPeople);
    }).catch(function(err){
      console.log(err);
    })
  });

};
