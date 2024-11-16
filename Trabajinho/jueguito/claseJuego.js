class Juego {
  constructor(cantidadEnemigos){
    this.crearPersonaje ();
    this.crearEnemigos();
   
   
  }
  
  dibujar() {
    
    this.personaje.dibujar();
    for(let i=0; i<10;i++){
    this.enemigos[i].dibujar();
    this.enemigos[i].mover();
    }

  }
 crearPersonaje() {
    this.personaje = new Personaje(100, 300);
  }
   teclapresionada(keyCode) {
    this.personaje.teclapresionada(keyCode);
  }
  crearEnemigos(){
    this.enemigos = [];
    for(let i= 0 ; i < 15 ; i++ ){
 this.enemigos.push(new Enemigos(i * 70, 0, random(2, 5)));
  
    }
    
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
