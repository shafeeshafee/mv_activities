const express = require("express");
const app = express();
const PORT = 3000;

const seed = require("./seed");
const { db } = require("./db");
const { Show, User } = require("./models");

app.use(express.json());

seed();

app.get("/", async (req, res) => {
  res.send(`<h1>Welcome to the Jungle!</h1>`);
});

// A route that will display all the users.
app.get("/users", async (req, res) => {
  let allUsers = await User.findAll();
  res.json(allUsers);
});

// A route that can create a user.
app.post("/create-user", async (req, res) => {
  let { username } = req.body;
  await User.create({
    username: username,
  });
  res.send(`New user added: ${username}`);
});

// A route that will display all the shows.
app.get("/shows", async (req, res) => {
  let allShows = await Show.findAll();
  res.json(allShows);
});

// A route that will display all the shows that the user has watched.
app.get("/shows/:userId", async (req, res) => {
  const { userId } = req.params;

  const show = await Show.findAll({
    include: [
      {
        model: User,
        required: true,
      },
    ],
    where: {
      UserId: userId,
    },
  });
  res.json(show);
});

// A route that can create a show.
app.post("/create-show", async (req, res) => {
  let { name, genre, seasons, ratings, UserId } = req.body;

  await Show.create({
    name,
    genre,
    seasons,
    ratings,
    UserId,
  });
  res.send(`New show added ${name}`);
});

// A route that will ‘rate’/'update' a show that you have already watched.
app.put("/update-show/:id", async (req, res) => {
  const { id } = req.params;
  const [updated] = await Show.update(req.body, {
    where: { id: id },
  });

  console.log(updated);

  if (updated) {
    const updatedShow = await Show.findOne({ where: { id: id } });
    return res.status(200).json({ post: updatedShow });
  }
});

// A route that will ‘remove’ a show if the series gets cancelled.
app.delete("/delete-show/:id", async (req, res) => {
  const { id } = req.params;

  await Show.destroy({
    where: { id: id },
  });

  res.send("Show successfully removed.");
});

app.listen(PORT, () => {
  console.log(` Your server is now listening to port ${PORT}`);
});
