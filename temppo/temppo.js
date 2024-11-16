let contador;

function setup() {
  createCanvas(400, 200);
  contador = new ContadorRegresivo(10); // Inicializa el contador regresivo con 10 segundos
}

function draw() {
  background(220); // Fondo de la pantalla
  contador.actualizar(); // Actualiza el tiempo restante
  contador.mostrar(); // Muestra el tiempo en la pantalla

  if (contador.haTerminado()) {
    fill(255, 0, 0);
    textSize(32);
    text("¡Tiempo terminado!", width / 2, height / 2 + 50);
  }
}
