//imports
const { db, DataTypes, Model } = require("../db"); // ../ because we are inside the models folder

const { Show } = require("./Show");
const { User } = require("./User");

//associations
User.hasMany(Show);
Show.belongsTo(User);

//export
module.exports = { Show, User };
