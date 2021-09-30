class Pokemon {
  static pokemons = [];

  constructor(name, number, type, hp) {
    this.name = name;
    this.number = number;
    this.type = type;
    this.hp = hp;
  }

  static nameIsString(name) {
    return typeof name === "string";
  }

  static numberIsTypeNumber(number) {
    return typeof number === "number";
  }

  static isValidType(type) {
    const elements = ["fire", "water", "grass", "earth", "lightning"];
    return elements.includes(type);
  }

  static isValidHp(hp) {
    return hp >= 50 && hp <= 250 ? true : false;
  }

  assignType(type) {
    this.type = type;
  }
}

module.exports = Pokemon;
