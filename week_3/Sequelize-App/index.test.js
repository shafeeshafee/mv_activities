//import database + models
const { db } = require("./db");

//import our models from the file where we've created the associations
const { Game, User } = require("./index");

//write our test suite
describe("Videogame collection database", () => {
  //clear out our database
  //beforeAll() <- a jest method that will run something before we invoke any tests
  //we dont know how long its going to take to
  beforeAll(async () => {
    await db.sync({
      force: true, //clears out all entries in all of our tables in our db
    });
  });

  //make sure that we can create entries in our tables (rows)
  test("can create a game", async () => {
    //create a row in the Game table
    //.create
    const testGame = await Game.create({
      name: "Final Fantasy",
      platform: "PS1",
    });
    expect(testGame.name).toBe("Final Fantasy");
    expect(testGame.platform).toBe("PS1");
  });

  test("can create a user", async () => {
    const testUser = await User.create({
      username: "helloGoodbye123",
      gamesCollected: "Crash,Spyro,Metroid,Farmville",
    });

    expect(testUser.username).toBe("helloGoodbye123");
    //string manipulation
    //how can i access 'Crash , Spyro , Metroid , Farmville'?
    let games = testUser.gamesCollected.split(",").length; //'Crash , Spyro , Metroid , Farmville'
    expect(games).toBe(4);
  });

  // //test to check associations Users.hasMany(Games)
  test("User can have many games", async () => {
    // create a user instance from the User model
    const newPlayer = await User.create({
      username: "skyboxx123",
      gamesCollected: "xyz",
    });

    // three game instances from the Game model
    const streetFighter = await Game.create({
      name: "streetFighter",
      platform: "ps1",
    });
    const earthBound = await Game.create({
      name: "earthBound",
      platform: "snes",
    });
    const fireEmblem = await Game.create({
      name: "fireEmblem",
      platform: "gameBoy",
    });

    //magic methods where we can associate data from one table to another
    //.add__nameOfTable___
    await newPlayer.addGame(streetFighter);
    await newPlayer.addGame(earthBound);
    await newPlayer.addGame(fireEmblem);

    //magic method to retrieve all the games from the user
    //.get__nameOfTable__(s) <-pluralize the name of the table
    //CALL THE instance of the USER NOT ON THE TABLE
    const games = await newPlayer.getGames();

    expect(games.length).toBe(3);
  });
});
