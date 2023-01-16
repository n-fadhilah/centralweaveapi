module.exports = (app) => {
  const units4rm = require("../controllers/units4rm.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", units4rm.create);

  //Create multiple units
  router.put("/", units4rm.createmultiple);

  // Retrieve all Tutorials
  router.get("/", units4rm.findAll);

  // Retrieve all published Tutorials
  router.get("/avail", units4rm.findAllAvail);

  // Retrieve a single Tutorial with id
  router.get("/:id", units4rm.findOne);

  // Update a Tutorial with id
  router.put("/:id", units4rm.update);

  // Delete a Tutorial with id
  router.delete("/:id", units4rm.delete);

  // Create a new Tutorial
  router.delete("/", units4rm.deleteAll);

  app.use("/api/units4rm", router);
};
