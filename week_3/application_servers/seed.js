const path = require("path");
const fs = require("fs").promises;

const { db } = require("./db");
const { Music } = require("./models/index");
const { User } = require("./models/index");

const seed = async () => {
  // seed generator function
  async function seedModel(modelName, fileName, modelClass) {
    await db.sync({ force: true });

    const seedPath = path.join(__dirname, fileName);
    const buffer = await fs.readFile(seedPath);

    const { data } = JSON.parse(String(buffer));

    const modelPromises = data.map((music) => modelClass.create(music));
    await Promise.all(modelPromises);
    console.log(`${modelName} was just populated.`);
  }

  seedModel("Music", "music.json", Music);
  seedModel("User", "user.json", User);

  // await db.sync({ force: true });

  // const seedPath = path.join(__dirname, "music.json");
  // const buffer = await fs.readFile(seedPath);

  // const { data } = JSON.parse(String(buffer));

  // const musicPromises = data.map((music) => Music.create(music));
  // await Promise.all(musicPromises);
  // console.log("DB was just populated!");
};

module.exports = seed;
