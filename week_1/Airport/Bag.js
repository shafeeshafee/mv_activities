class Bag {
  constructor(weight) {
    this.weight = weight;
    if (!weight) {
      throw new Error("bag must have a weight");
    }
  }
}

module.exports = Bag;
