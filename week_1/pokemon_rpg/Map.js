/**
 * Represents the map
 * @constructor
 * @param size {number} - sets the size of the map
 * @param player {Player} - Sets the Player object to be usd on the map
 * @param monsters {[Monster]} - Array of monsters that will populate the map
 */
class Map {
  constructor(size, player, monsters) {
    this.map = [];
    this.size = size;
    this.player = player;
    this.monsters = monsters;
  }
  /** Function for generating the map */
  generateArray() {
    for (let x = 0; x < this.size; x++) {
      this.map[x] = [];
      for (let y = 0; y < this.size; y++) {
        this.map[x][y] = " ";
      }
    }
    for (let m = 0; m < this.monsters.length; m++) {
      this.respawn(this.monsters[m]);
      while (this.map[this.monsters[m].x][this.monsters[m].y] === "M") {
        this.respawn(this.monsters[m]);
      }
      this.map[this.monsters[m].x][this.monsters[m].y] = "M";
    }
    this.respawn(this.player);
    this.map[this.player.x][this.player.y] = "p";
  }
  /** Function for printing array to the console */
  printArray() {
    let printStrings = [];
    printStrings.push("-----------------------");
    for (let x = 0; x < this.size; x++) {
      let string = "||";
      for (let y = 0; y < this.size; y++) {
        string = string + "  " + this.map[x][y] + "  ";
      }
      string = string + "||";
      printStrings.push(string);
    }
    printStrings.push("-----------------------");

    for (let i = 0; i < printStrings.length; i++) {
      console.log(printStrings[i]);
    }
  }
  /** Function for checking if player character has collided with a monster */
  checkCollision() {
    for (let m = 0; m < this.monsters.length; m++) {
      if (
        this.monsters[m].x === this.player.x &&
        this.monsters[m].y === this.player.y
      ) {
        this.map[this.player.x][this.player.y] = "B";
        return [true, m];
      }
    }
    return false;
  }
  respawn(Pokemon) {
    Pokemon.x = Math.floor(Math.random() * this.size);
    Pokemon.y = Math.floor(Math.random() * this.size);
  }
  removeMonster(monster) {
    let monsters_temp = this.monsters.filter(function (ele) {
      return ele != monster;
    });
    this.monsters = monsters_temp;
  }
}

module.exports = Map;
