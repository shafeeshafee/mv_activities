const Person = require("./Person");
const Plane = require("./Plane");

describe("Plane class", () => {
  test("Plane has name", () => {
    const newPlane = new Plane("Delta");

    expect(typeof newPlane.name).toBe("string");
    expect(newPlane.name.length).toBeGreaterThan(1);
  });

  test("Plane has origin and destination", () => {
    const newPlane2 = new Plane("Blue");
    newPlane2.setOrigin("Cairo");
    newPlane2.setDestination("Halifax");

    expect(newPlane2.origin).toBe("Cairo");
    expect(newPlane2.destination).toBe("Halifax");
  });

  test("Plane can add passengers", () => {
    const newPlane3 = new Plane("Dubai Airlines");
    const naomi = new Person("Naomi", 123456, 40);
    newPlane3.addPassenger(naomi.name);
    expect(newPlane3.passengers.length).toBe(1);
  });
});
