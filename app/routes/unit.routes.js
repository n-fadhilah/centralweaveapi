module.exports = (app) => {
  const units = require("../controllers/unit.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", units.create);

  // Retrieve all Tutorials
  router.get("/", units.findAll);

  // Retrieve all published Tutorials
  router.get("/avail", units.findAllAvail);

  // Retrieve a single Tutorial with id
  router.get("/:id", units.findOne);

  // Update a Tutorial with id
  router.put("/:id", units.update);

  // Delete a Tutorial with id
  router.delete("/:id", units.delete);

  // Create a new Tutorial
  router.delete("/", units.deleteAll);

  app.use("/api/units", router);
};
