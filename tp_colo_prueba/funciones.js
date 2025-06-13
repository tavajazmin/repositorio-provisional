function optico(zero, max, veinte) {
  for (let i = 1; i < 12; i++) {
    for (let j = 1; j < 12; j++) {
      
      fill(255); // Asumiendo que 'blanco' es un color blanco
      
      let diagonal = dist(0, 0, max, max); // Diagonal correcta de la pantalla
      let distan = dist( tami, j * tami, i*tami, 0); // Distancia desde la base izquierda
      let rango = map(distan, 0, diagonal, 0, veinte); // Mapeo del degradado
      
      ellipse(i * tami, j * tami, rango, rango);
    }
  }
}



function keyPressed (){
 if(key == 'r'){
rango=+1;
 }
}
// retorna valor
 function tamano ( cant, cin){
   total = cin/cant;
  
  return total;
}
