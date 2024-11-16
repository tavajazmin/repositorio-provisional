
let game;

function setup() {
  createCanvas(800, 600);
  game = new Game();
  game.setupEnemies(5); // Crea 5 enemigos
}

function draw() {
  background(220);
  createCanvas(640,480);
  background(0);
  game.updateEnemies(); // Actualiza y muestra los enemigos
}
