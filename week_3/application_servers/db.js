// imports
const { Sequelize, DataTypes, Model } = require("sequelize");

//create an instance of the database call it db
const db = new Sequelize("database", "username", "password", {
  dialect: "sqlite",
  storage: "./music.sqlite",
  logging: false,
});

//export
module.exports = { db, DataTypes, Model };
