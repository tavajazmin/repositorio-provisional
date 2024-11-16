class Enemigos {
 constructor(posX,posY,velocidad){
 this.posX = posX ;
 this.posY = posY;
 this.miColor= color (0,255,0);
 
 this.velocidad=velocidad;
 }

mover(){
 this.posY += this.velocidad;
 if(this.posY > height){
  this.posY =0; 
 }
}
dibujar() { 
  fill(this.miColor);
 rect(this.posX, this.posY ,30, 30);
  
}
//movimientoY(){
 //this.posY++; }




}
