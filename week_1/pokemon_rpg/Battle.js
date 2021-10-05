function battle(player, monster) {
  let winner = "";

  console.log(`An enemy wants to challenge ${player.name}!`);

  // if collision happens, battle until one player reaches below 0
  while (player.hp > 0 && monster.hp > 0) {
    console.log(`\n=======ROUND BEGINNING=======\n`);

    // display player and monster HP at the beginning of round
    console.log(`>>> ${player.name} (Player) HP: ${player.hp}`);
    console.log(`>>> ${monster.name} (Monster) HP: ${monster.hp}\n`);

    // monster takes turn first, then player
    monster.randomAttack(player);
    player.randomAttack(monster);

    // if one of their health goes below 0, assign a winner and fainted
    if (player.hp <= 0 && monster.hp > 0) {
      winner = monster.name;
      console.log(`>>> ${player.name} fainted with an HP of ${player.hp}`);
    } else if (monster.hp <= 0 && player.hp > 0) {
      winner = player.name;
      console.log(`>>> ${monster.name} fainted with an HP of ${monster.hp}`);
    }

    console.log("");
    console.log("\n=======ROUND END=======\n");
  }

  console.log(
    `\n!!!!!!!!!!!!!!!! ${winner.toUpperCase()} WINS THE BATTLE !!!!!!!!!!!!!!!!! \n`
  );
}

module.exports = battle;
