//imports
const { db, DataTypes, Model } = require("../db");

//child class
class User extends Model {}

//create model
User.init(
  {
    username: DataTypes.STRING,
  },
  {
    sequelize: db,
  }
);

//export
module.exports = { User };
