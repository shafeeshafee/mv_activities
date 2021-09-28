const Airport = require("./Airport");
const Plane = require("./Plane");
const Bag = require("./Bag");
const Person = require("./Person");

describe("Airport object", () => {
  test("airport has a name", () => {
    let airport1 = new Airport("Singapore International");

    expect(typeof airport1.name).toBe("string");
  });

  test("airport has planes", () => {
    let airport2 = new Airport("Tokyo Airport");
    airport2.planes.push("Delta");
    expect(airport2.planes.length).toBe(1);
  });

  test("airport can add planes", () => {
    let airport3 = new Airport("Dhaka Airport");
    airport3.addPlane("Vivo");

    expect(airport3.planes.length).toBe(1);
  });

  test("airport can have planes with passengers with bags", () => {
    const airport4 = new Airport("Bangkok");
    const plane1 = new Plane("The Gyrocopter");
    const naomi = new Person("Naomi", 123456, 40);
    const naomisBag = new Bag(20);

    const addedBag = naomi.addBag(naomisBag).length;
    const planeAddedToAirport = airport4.addPlane(plane1).length;

    expect(addedBag).toBe(1);
    expect(planeAddedToAirport).toBe(1);
  });
});
