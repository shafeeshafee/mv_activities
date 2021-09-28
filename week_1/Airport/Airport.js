class Airport {
  constructor(name) {
    this.name = name;
    this.planes = []; //what would be the best datatype? -> Array
  }

  addPlane(plane) {
    //use an array method
    const { planes } = this;
    planes.push(plane);

    return planes;
  }
}

module.exports = Airport;
