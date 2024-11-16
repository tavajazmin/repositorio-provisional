let juego;

function setup() {
  createCanvas(640, 480);
  juego = new Juego(); // Inicializa el juego
}

function draw() {
  background(220);
  juego.actualizar(); // Actualiza el juego
}

function keyPressed() {
  juego.teclapresionada(keyCode);
}

function keyReleased() {
  juego.teclapresionLiberada(keyCode);
}
