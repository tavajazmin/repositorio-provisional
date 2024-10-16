function cargarFotos(imag,index,x,y,ancho,alto){
 image(imag[index],x,y,ancho,alto); 
}

function cuadroTexto(x,y,an,al,r,g,b,opa){
  fill(r,g,b,opa);
rect(x,y,an,al);
}


function dibujarBoton (px,py,an,al){
 
 if (areaBoton(px,py,an,al)){
   fill(0,255,255);
}else { 
  fill(255, 0, 255);
}
rect(px,py,an,al,al/4);

}

function areaBoton(x,y,an,al){

  return mouseX > x &&  mouseX < x+an && mouseY > y && mouseY < y+al;
}
