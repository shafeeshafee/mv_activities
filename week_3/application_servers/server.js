const express = require("express");
const seed = require("./seed");
const app = express();
const PORT = 3000;

const { db } = require("./db");
const { Music } = require("./models/index");

app.use(express.json());

// start the server, we run the seed function
seed();

// routes
app.get("/", async (req, res) => {
  res.send(`<h1>Hello, this is HTML.</h1>`);
});

app.post("/addmusic", async (req, res) => {
  const postMusic = await Music.create({ name: "newSong", genre: "Techno" });
  return res.status(201).json({
    postMusic,
  });
});

app.get("/music", async (req, res) => {
  let allSongs = await Music.findAll();
  res.json(allSongs);
});

app.get("/music/:id", async (req, res) => {
  let id = req.params.id;
  let specificSong = await Music.findByPk(id);
  res.json(specificSong);
});

app.put("/music/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const [updated] = await Music.update(req.body, {
      where: { id: id },
    });

    console.log(updated);

    if (updated) {
      const updatedSong = await Music.findOne({ where: { id: id } });
      return res.status(200).json({ post: updatedSong });
    }
  } catch (err) {
    res.json({ err: err.message });
  }
});

app.delete("/music/:id", async (req, res) => {
  let id = req.params.id;

  let deleted = await Music.destroy({
    where: { id: id },
  });
  if (deleted) {
    return res.status(204).send("Post deleted");
  }
});

app.listen(PORT, () => console.log("Listening on PORT ", PORT));
