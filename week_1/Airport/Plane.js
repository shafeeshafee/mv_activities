class Plane {
  constructor(name, origin, destination) {
    this.name = name;
    this.passengers = [];
    this.origin = origin;
    this.destination = destination;
  }

  setOrigin(origin) {
    this.origin = origin;
    return origin;
  }

  setDestination(destination) {
    this.destination = destination;
    return destination;
  }

  addPassenger(passenger) {
    const { passengers } = this;
    passengers.push(passenger.name);
    return passengers;
  }
}

module.exports = Plane;
