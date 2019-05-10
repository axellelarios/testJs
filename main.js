const level1 = [["#", 0, 0, 0, 0, 0, 0, "A"]];

const level2 = [["#", 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, "A"]];

const level3 = [
  ["#", 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, "A"]
];


let game = {
  level: level1,
  positionX: 0,
  positionY: 0,
  oldPositionX: 0,
  oldPositionY: 0
};

/* functions */

function deplacement() {
  if (event.keyCode == "37") {
    left();
  } else if (event.keyCode == "39") {
    right();
  } else if (event.keyCode == "38") {
    up();
  } else if (event.keyCode == "40") {
    down();
  }
}

function right() {
  game.positionX++;
  game.level[game.positionY][game.positionX] = "#";
  game.level[game.positionY][game.positionX - 1] = 0;

  if (game.positionX > game.level[game.positionX].length) {
    alert('Gagné');
  }
}

function left() {
  game.positionX--;
  game.level[game.positionY][game.positionX] = "#";
  game.level[game.positionY][game.positionX + 1] = 0;
  console.log(game.level);
}

function down() {
  game.positionY++;
  game.level[game.positionY][game.positionX] = "#";
  game.level[game.positionY][game.positionX - 1] = 0;
  console.log(game.level);
}

function up() {
  game.positionY--;
  game.level[game.positionY][game.positionX] = "#";
  game.level[game.positionY][game.positionX + 1] = 0;
  console.log(game.level);
}

/*************************************************************************************************/
/* *********************************** Programme*********************************** */
/*************************************************************************************************/
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", deplacement);
  console.log(game.level[game.positionX].length);
  lol
});
