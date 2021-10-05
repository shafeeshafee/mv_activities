const Pokemon = require("./Pokemon.js");

class Player extends Pokemon {
  constructor(name, hp, number, type, level) {
    super(name, hp, number, type, level);
    this.level = level;
    this.x = 0;
    this.y = 0;
    this.attacks = [];
    this.baseHp = hp;
  }
  setName(name) {
    this.name = name;
  }

  setHp(hp) {
    this.hp = hp;
    this.baseHp = hp;
  }

  assignType(type) {
    this.type = type;
  }

  addAttack(attackName, attackDamage) {
    this.attacks.push({
      name: attackName,
      damage: attackDamage,
    });
  }

  displayAttacks() {
    const attackNames = this.attacks.map((attack) => attack.name);
    console.log(attackNames);
  }
}

module.exports = Player;
