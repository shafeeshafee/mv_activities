class Pokemon {
  constructor(name, hp, number, type) {
    this.hp = hp;
    this.name = name;
    this.number = number;
    this.type = type;
    this.x = 0;
    this.y = 0;
    this.attacks = [];
  }
  assignType(type) {
    this.type = type;
  }

  // select will get a random attack from one of their attacks
  // the given enemy's HP will decrease by whichever attack's damage points
  // display attack and the damage it did on enemy
  randomAttack(pokemon) {
    let select = Math.floor(Math.random() * this.attacks.length);

    pokemon.hp = pokemon.hp - this.attacks[select].damage;

    console.log(
      `⚔ ${this.name} attacked ${pokemon.name} with ${this.attacks[select].name} for ${this.attacks[select].damage}!\n`
    );
  }

  // changed "update()" to be "isntAlive()", as it made more sense and readable
  isntAlive() {
    if (this.hp <= 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Pokemon;
