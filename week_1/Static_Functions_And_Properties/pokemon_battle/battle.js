const Pokemon = require("../pokemon_scaffold");

class Pikachu extends Pokemon {
  constructor(name, number, type, hp, attackDamage) {
    super(name, number, type, hp);
    this.attackDamage = attackDamage;
  }
}

class MewTwo extends Pokemon {
  constructor(name, number, type, hp, attackDamage) {
    super(name, number, type, hp);
    this.attackDamage = attackDamage;
  }
}

const newPikachu = new Pikachu("Pikachu", 25, "lightning", 200);
const newMewTwo = new MewTwo("MewTwo", 50, "psychic", 200);

function battle(pokemon1, pokemon2) {
  let winner = "";

  while (pokemon1.hp > 0 && pokemon2.hp > 0) {
    console.log("New rounded started!");

    // gives us random number each time while loop runs
    const randomAttackDamage = () => Math.floor(Math.random() * 51);
    const hitOrMiss = () => Math.floor(Math.random() * 2);
    const heal = () => Math.floor(Math.random() * 16);

    newPikachu.attackDamage = randomAttackDamage();
    newMewTwo.attackDamage = randomAttackDamage();

    // pokemon1 = Pikachu
    // pokemon2 = MewTwo

    // pikachu attacks mewtwo
    if (hitOrMiss() === 1) {
      if (pokemon1.hp <= 45) {
        pokemon1.hp = pokemon1.hp + heal();
        console.log(`Pokemon ${pokemon1.name} has healed!`);
      } else {
        // pokemon1(pikachu) attacked pokemon2 (mewtwo)
        pokemon2.hp = pokemon2.hp - pokemon1.attackDamage;
        console.log(
          `${pokemon1.name} attacked ${pokemon2.name} for ${pokemon1.attackDamage}. It was very effective.`
        );
      }
    } else {
      console.log(`${pokemon1.name} has missed!`);
    }

    // mewtwo attacks pikachu
    if (hitOrMiss() === 1) {
      if (pokemon2.hp <= 45) {
        pokemon2.hp = pokemon2.hp + heal();
        console.log(`Pokemon ${pokemon2.name} has healed!`);
      } else {
        pokemon1.hp = pokemon1.hp - pokemon2.attackDamage;
        console.log(
          `${pokemon2.name} attacked ${pokemon1.name} for ${pokemon2.attackDamage}. It was very effective.`
        );
      }
    } else {
      console.log(`${pokemon2.name} has missed!`);
    }

    // show both parties HP at the end of the round
    console.log("\nRound end results:");
    console.log(`${pokemon1.name} hp is at ${pokemon1.hp}`);
    console.log(`${pokemon2.name} hp is at ${pokemon2.hp}`);

    if (pokemon1.hp <= 0 && pokemon2.hp > 0) {
      // if pikachu has 0 or less, and mewtwo has more
      winner = pokemon2.name; // // winner is pikachu
    } else if (pokemon2.hp <= 0 && pokemon1.hp > 0) {
      // if mewtwo has 0 or less, and pikachu has more
      winner = pokemon1.name; // winner is mewtwo
    }

    console.log(
      `==============================================================`
    );
  }

  console.log(`And the winner is.... ${winner}`);
}

console.log(battle(newPikachu, newMewTwo));
