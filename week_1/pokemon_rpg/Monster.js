const Pokemon = require("./Pokemon");

class Monster extends Pokemon {
  constructor(name, hp, type) {
    super(name, hp, type);
    this.defeated = false;
    this.x = 0;
    this.y = 0;
    this.attacks = [];
  }

  getName(name) {
    this.name = name;
  }

  getHp(hp) {
    this.hp = hp;
  }

  getNumber(number) {
    this.number = number;
  }

  getX(x) {
    this.x = x;
  }

  getY(y) {
    this.y = y;
  }

  respawn() {
    this.x = Math.floor(Math.random() * 4);
    this.y = Math.floor(Math.random() * 4);
  }

  addAttack(attackName, attackDamage) {
    this.attacks.push({
      name: attackName,
      damage: attackDamage,
    });
  }

  defeat() {
    this.defeated = true;
  }
  assignType(type) {
    this.type = type;
  }
}

module.exports = Monster;
