//imports
const { db, DataTypes, Model } = require("../db"); // requiring the database, datatype + model class from our db file NOT SEQUELIZE

//creates a child class Game with the parent class of Model
class Game extends Model {}

//we create specifics of the child class
//init creates columns for our table
Game.init(
  {
    name: DataTypes.STRING,
    platform: DataTypes.STRING,
  },
  {
    sequelize: db, //let's sequelize know where your table will be stored
  }
);

//export
module.exports = {
  Game,
};
