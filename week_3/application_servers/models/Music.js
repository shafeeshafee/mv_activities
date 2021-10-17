//imports
const { db, DataTypes, Model } = require("../db");

//child class
class Music extends Model {}

//create model
Music.init(
  {
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
  },
  {
    sequelize: db,
  }
);

//export
module.exports = {
  Music,
};
