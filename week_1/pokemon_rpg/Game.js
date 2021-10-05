const Player = require("./Player");
const Map = require("./Map");
const Monster = require("./Monster");
const allPokemon = require("./allPokemon");
const battle = require("./Battle");

// random attacks for all monsters
let sampleAttacks = [
  { name: "Tackle", damage: 10 },
  { name: "Scratch", damage: 20 },
  { name: "Body Slam", damage: 30 },
];

//random attacks for player
let sampleAttacks2 = [
  { name: "Lightning Blast", damage: 30 },
  { name: "Ancient Thunder", damage: 30 },
  { name: "Storm Hyde", damage: 30 },
];

// make a new player
const mainPlayer = new Player();
mainPlayer.setName("Pikachu");
mainPlayer.setHp(150);
mainPlayer.assignType("fire");
mainPlayer.attacks = sampleAttacks2;

// generate monsters
let monsters = [];
for (let i = 0; i < 6; i++) {
  let monster = new Monster(allPokemon[i]);
  monster.attacks = sampleAttacks;
  monster.hp = 100;
  monsters.push(monster);
}

// new map instance with a size of 4
const map = new Map(4, mainPlayer, monsters);
map.generateArray();

// running our game if collide
// prints the array with player on it
// if there was a collision, we initate a battle with
// battle(player, the monster it collided with)
function runGame(map) {
  map.generateArray();
  let collide = map.checkCollision();
  map.printArray();
  if (collide[0]) {
    console.log("Collision occured!");
    battle(map.player, map.monsters[collide[1]]);
  }
}

runGame(map);
