import fetch from "node-fetch";

const pokemonDB = [];

let randomPokemon = Math.floor(Math.random() * 900);

const getRandomPokemon = async (num) => {
  let response;
  try {
    response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }

  response.then()
};

console.log(getRandomPokemon(randomPokemon));

function catchEm(pokemon, pokeball) {}

function getPokedex(pokemon) {}
