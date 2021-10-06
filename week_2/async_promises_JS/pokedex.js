import fetch from "node-fetch";

/*
Assignment: 
Create three functions, one called getRandomPokemon(), one called catchEm(pokemon, pokeball) and the other one called pokeDex(pokemon).
*/

// database
const pokemonDB = [];

let randomNumber = Math.floor(Math.random() * 850);

async function getRandomPokemon(num) {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
getRandomPokemon(randomNumber)
  .then((data) => {
    let newThrow = Math.floor(Math.random() * 5);
    let luckyNumbers = [0, 1, 3];
    let luckyNumber = 3;

    const catchEm = (pokeBall) => {
      if (pokeBall === "normal") {
        // check if throw is our lucky number
        if (newThrow === luckyNumber) {
          pokemonDB.push(data.name);
          console.log(data.name);
          console.log(pokemonDB);
        }
      } else if (pokeBall === "master") {
        if (luckyNumbers.includes(newThrow)) {
          pokemonDB.push(data.name);
          console.log(data.name);
          console.log(pokemonDB);
        }
      }
    };

    catchEm(data, "master");
  })
  .catch((err) => {
    console.log(err);
  });

function pokeDex(db, pokemonName) {
  if (db.includes(pokemonName)) {
    return true;
  } else {
    return false;
  }
}

pokeDex(pokemonDB, "magby");
