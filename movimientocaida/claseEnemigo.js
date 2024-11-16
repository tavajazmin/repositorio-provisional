class Enemy {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
  }

  move() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = 0; // Reinicia la posición vertical al llegar al final de la pantalla
      this.x = random(0, width - this.size); // Cambia la posición horizontal aleatoriamente
    }
  }

  display() {
    fill(255, 0, 0); // Color rojo para los enemigos
    rect(this.x, this.y, this.size, this.size); // Dibuja el enemigo como un cuadrado
  }
}
