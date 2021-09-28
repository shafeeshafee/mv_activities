const Bag = require("./Bag");
const Person = require("./Person");

describe("Person class", () => {
  test("Person has name", () => {
    const newPerson = new Person("shafee", 123456, 40);
    expect(newPerson.name.length).toBeGreaterThan(1);
    expect(typeof newPerson.name).toBe("string");
  });

  test("Person has bag", () => {
    const newPerson1 = new Person("dinkleberg", 53452, 13);
    newPerson1.addBag(5);
    expect(newPerson1.bags.length).toBe(1);
  });
});
