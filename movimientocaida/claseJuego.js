class Game {
  constructor() {
    this.enemies = [];
  }

  setupEnemies(numEnemies) {
    for (let i = 0; i < numEnemies; i++) {
      this.enemies.push(new Enemy(random(0, width - 20), random(-100, -20), 20, random(2, 5)));
    }
  }

  updateEnemies() {
    for (let enemy of this.enemies) {
      enemy.move(); // Mueve cada enemigo
      enemy.display(); // Muestra cada enemigo en la pantalla
    }
  }
}
