const Plane = require('../src/Plane');
const Passenger = require('../src/Passenger');

class Airport {
  static airports = [];

  constructor(name) {
    this.name = name;
    this.planes = [];
    this.constructor.airports.push(this);
  }

  addPlanes(plane) {
    
  }

}

module.exports = Airport
