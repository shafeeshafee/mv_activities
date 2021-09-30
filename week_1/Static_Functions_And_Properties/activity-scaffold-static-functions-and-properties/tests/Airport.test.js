const Plane = require('../src/Plane')
const Airport = require('../src/Airport')

describe('Airport class', () => {

  test('Airport instance', () => {
    const newAirport = new Airport('JFK');
    const newPlane = new Plane();

    newAirport.planes.push(newPlane);

    expect(newAirport.name).toEqual('JFK');
    expect(newAirport.planes.indexOf(newPlane) !== -1).toBe(true);
  })

  test('Static property stores instances of each iteration', () => {
  
  })

  test('Airport can add planes', () => {
    const newAirport = new Airport('JFK');
    const newPlane = new Plane();

    
  })
})
