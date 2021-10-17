//import our database, DataTypes, Model
const { db, DataTypes, Model } = require("./db");

//import our models
const { Game } = require("./Models/Game");
const { User } = require("./Models/User");

//associations - relationship between tables
// .belongsTo //.hasMany //
Game.belongsTo(User); //creates a foreign key on the Game table that indicates the associated User
User.hasMany(Game);

//export the models with these associations
module.exports = { Game, User };
