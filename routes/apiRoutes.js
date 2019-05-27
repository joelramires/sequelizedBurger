// require model functions
var db = require("../models");

// exports routes to be used in server.js
module.exports = app => {

  // GET all burgers
  app.get("/api/burgers", function(req, res) {
   burgers.findall({})
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // create/POST a new burger
  app.post("/api/burgers", function(req, res) {
    
    burgers.create(req.body)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });


  // get a burger by its id
  app.get("/api/burgers/:id", function(req, res) {
    burgers.findById(req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // PUT/update a burger's eaten to true/false by id
  app.put("/api/burgers/:id", function(req, res) {
    // req.body => {eaten: true} || {eaten : false}
    burgers.update(req.body.eaten, req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // DELETE a burger by its id
  app.delete("/api/burgers/:id", function(req, res) {
    burgers.remove(req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

}