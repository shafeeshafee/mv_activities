const capitalizeFirstLetter = (word) => word[0].toUpperCase() + word.slice(1);

class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  static containsType(type) {
    const types = ["feline", "canine", "bird", "fish"];
    return types.includes(type.toLowerCase());
  }

  static containsPrefix(name) {
    return name.split("-")[0] === "King" || name.split("-")[0] === "Queen";
  }
}

console.log(Pet.containsType("fish")); // true
console.log(Pet.containsType("crustacean")); // false
console.log(Pet.containsPrefix("King-Mittens")); // true
console.log(Pet.containsPrefix("Mittens")); // false
