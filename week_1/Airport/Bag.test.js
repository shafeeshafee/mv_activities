const Bag = require("./Bag");

describe("Bag class", () => {
  //bag has weight
  test("bag has weight", () => {
    const newBag1 = new Bag(30);

    expect(newBag1.weight).toBeGreaterThan(0);
  });
  //if bag has no weight, return error
  test("bag has no weight to return an error", () => {
    expect(() => new Bag()).toThrowError("bag must have a weight");
  });
});
