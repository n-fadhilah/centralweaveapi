const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.units = require("./unit.model.js")(mongoose);
db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;
