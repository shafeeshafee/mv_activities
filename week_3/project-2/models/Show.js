const { db, DataTypes, Model } = require("../db");

class Show extends Model {}

//create model - name, genre , seasons, rating,
Show.init(
  {
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    seasons: DataTypes.INTEGER,
    ratings: DataTypes.INTEGER,
  },
  {
    sequelize: db,
  }
);

//export
module.exports = {
  Show,
};
