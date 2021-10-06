import fetch from "node-fetch";

fetch("https://pokeapi.co/api/v2/pokemon/luc7ario")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    err.message;
  });

// fetch("https://pokeapi.co/api/v2/pokemon/500")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.name);
//   })
//   .catch((err) => {
//     err.message;
//   });

// fetch("https://pokeapi.co/api/v2/pokemon/642")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.name);
//   })
//   .catch((err) => {
//     err.message;
//   });
