const Passenger = require('./Passenger')

class Plane {
  constructor(origin, destination, flightNumber) {
    this.origin = origin
    this.destination = destination
    this.flightNumber = flightNumber
    this.passengers = [];
  }

  addPassengers(passenger) {

  }

  setOrigin(origin) {
 
  }

  setDestination(destination) {
    this.destination = destination;
  }

  setFlightNumber(flightNumber) {
 
  }
}

module.exports = Plane;
