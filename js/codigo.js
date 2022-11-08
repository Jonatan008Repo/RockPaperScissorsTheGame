function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function eleccion(playe) {
  let result = "";
  if (playe == 1) {
    result = "🥌";
  } else if (playe == 2) {
    result = "📃";
  } else if (playe == 3) {
    result = "✂";
  } else {
    result = "Error de dato";
  }
  return result;
}
function combat(pcJ, playerJ) {
  let state = "";
  if (pcJ == playerJ) {
    state = "Empate";
  } else if (
    (playerJ == 1 && pc == 3) ||
    (playerJ == 2 && pc == 1) ||
    (playerJ == 3 && pc == 2)
  ) {
    state = "Ganaste";
  } else {
    state = "Perdiste";
  }
  console.log(state);
  return state;
}
let player = 0;
let pc = 0;
let wins = 0;
let lost = 0;
let pos = "";
while (wins < 3 && lost < 3) {
  pc = aleatorio(1, 3);
  player = prompt(
    "Elige: 1 para rock, 2 para papel, 3 para tijera"
  );
  alert("PC elige " + eleccion(pc) + "y tu Elegiste" + eleccion(player));
  pos = combat(pc, player);
  if (pos == "Ganaste") {
    wins++;
  }
  else if (pos == "Perdiste") {
    lost++;
  }
  console.log(wins + "_" + lost);
  alert("Tu: " + pos);
}
alert("Ganaste " + wins + " veces. Perdiste " + lost + " veces.");
