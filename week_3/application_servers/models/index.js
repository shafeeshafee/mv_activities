//imports
const { db, DataTypes, Model } = require("../db");

const { Music } = require("./Music");
const { User } = require("./User");

//associations

Music.belongsTo(User);
User.hasMany(Music);

//export
module.exports = { Music, User };
