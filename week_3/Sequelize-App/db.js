const { Sequelize, DataTypes, Model } = require("sequelize");

// an instance of the Sequelize Class
const db = new Sequelize("database", "username", "password", {
  dialect: "sqlite", //what kind of SQL database are we working with?
  storage: "./games.sqlite", //the name of the file of our database
  logging: false, // Your terminal will be flooded with additional information about your db
});

//export
module.exports = { db, DataTypes, Model };
