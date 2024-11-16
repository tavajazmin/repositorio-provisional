class Juego {
  constructor(){
    this.crearPersonaje ();
    this.crearEnemigos();
  }
  
  dibujar() {
    this.personaje.dibujar();
    this.enemigos.dibujar();
    this.enemigos.movimientoY();
  }
  
 crearPersonaje() {
    this.personaje = new Personaje(100, 300);
  }
   teclapresionada(keyCode) {
    this.personaje.teclapresionada(keyCode);
  }
  
  crearEnemigos(){
  this.enemigos =new Enemigos (random(10,630),0);
}
  
iniciar(){
  
}


puntaje (){
  
}

tiempo(){
  
}

gano(){
  
}
perdio(){
  
}

}
