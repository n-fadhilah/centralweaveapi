const db = require("../models");
const Unit = db.units;

exports.createmultiple = (req, res) => {
  let items = req.body.map((item) => {
    return {
      block: item.block,
      floor: item.floor,
      unit: item.unit,
      price: item.price,
      unitnum: item.unitnum,
      isavailable: item.isavailable ? item.isavailable : false,
    };
  });

  Unit.insertMany(items)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

// Create and Save a new Unit
exports.create = (req, res) => {
  // Validate request
  // if (!item.unitnum) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }
  // Create a Unit
  const unit = new Unit({
    block: item.block,
    floor: item.floor,
    unit: item.unit,
    price: item.price,
    unitnum: item.unitnum,
    isavailable: item.isavailable,
  });
  // Save Unit in the database
  unit
    .save(unit)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Unit.",
      });
    });
};

// Retrieve all Units from the database.
exports.findAll = (req, res) => {
  Unit.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving units.",
      });
    });
};

// Find a single Unit with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Unit.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Unit with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Unit with id=" + id });
    });
};

// Update a Unit by the id in the request
exports.update = (req, res) => {
  const item = {
    block: req.body.block,
    floor: req.body.floor,
    unit: req.body.unit,
    price: req.body.price,
    unitnum: req.body.unitnum,
    isavailable: req.body.isavailable,
  };
  if (!item) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  const id = req.params.id;
  Unit.findByIdAndUpdate(id, item, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Unit with id=${id}. Maybe Unit was not found!`,
        });
      } else {
        res.send({
          message: "Unit was updated successfully.",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Unit with id=" + id,
      });
    });
};

// Delete a Unit with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Unit.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Unit with id=${id}. Maybe Unit was not found!`,
        });
      } else {
        res.send({
          message: "Unit was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Unit with id=" + id,
      });
    });
};

// Delete all Units from the database.
exports.deleteAll = (req, res) => {
  Unit.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Units were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all units.",
      });
    });
};

// Find all published Units
exports.findAllAvail = (req, res) => {
  Unit.find({ isavailable: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving units.",
      });
    });
};
