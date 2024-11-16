class Juego {
  constructor() {
    this.jugador = new Jugador(width / 2, height - 50, 30);
    this.cubosAzules = [];
    this.cubosAmarillos = [];
    this.puntaje = 0;
    this.numCubos = 5;

    for (let i = 0; i < this.numCubos; i++) {
      this.cubosAzules.push(new Cubo(random(0, width - 30), random(-200, -20), 30, color(0, 0, 255), -1));
      this.cubosAmarillos.push(new Cubo(random(0, width - 30), random(-200, -20), 30, color(255, 255, 0), 1));
    }
  }

  actualizar() {
    this.jugador.mover();
    this.jugador.mostrar();

    for (let cubo of this.cubosAzules) {
      cubo.mover();
      cubo.mostrar();
      if (cubo.checarColision(this.jugador)) {
        this.puntaje += cubo.valor;
        cubo.reposicionar();
      }
    }

    for (let cubo of this.cubosAmarillos) {
      cubo.mover();
      cubo.mostrar();
      if (cubo.checarColision(this.jugador)) {
        this.puntaje += cubo.valor;
        cubo.reposicionar();
      }
    }

    textSize(32);
    fill(0);
    text(`Puntaje: ${this.puntaje}`, 50, 50);
  }

  teclapresionada(keyCode) {
    this.jugador.teclapresionada(keyCode);
  }

  teclapresionLiberada(keyCode) {
    this.jugador.teclapresionLiberada(keyCode);
  }
}
