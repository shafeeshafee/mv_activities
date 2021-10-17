//import our db, Model, DataTypes
const { db, DataTypes, Model } = require("../db");

//Creating a User child class from the Model parent class
class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
    gamesCollected: DataTypes.STRING,
  },
  {
    sequelize: db,
  }
);

module.exports = { User };
