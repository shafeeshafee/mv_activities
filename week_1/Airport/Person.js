class Person {
  constructor(name, passportNumber, seatNumber) {
    this.name = name;
    this.bags = [];
    this.passportNumber = passportNumber;
    this.seatNumber = seatNumber;
  }

  //include an addBag method
  addBag(bag) {
    const { bags } = this;

    bags.push(bag);

    return bags;
  }
}

module.exports = Person;

const shafee = new Person("shafee", 123456, 40);

console.log(shafee.addBag(3));
