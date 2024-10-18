let fotos = [];
let estado;
let sonido ;

function preload() {
sonido =loadSound("data/cajaloop.mp3");
  
  for (let i=0; i<15; i++) {
    fotos[i] = loadImage("data/foto"+i+".png");
  }
}

function setup() {
  createCanvas(640, 480);
  for (let i=0; i<14; i++) {
    fotos[i].resize(640, 480);
  }
  estado = "inicio";
 
}
 function cargarFotos(imag, index, x, y, ancho, alto) {
    image(imag[index], x, y, ancho, alto);
  }
function draw() {
  background(0);

  if (estado==="inicio") {
    cargarFotos(fotos, 0, 0, 0, 640, 480);
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a primera
 
} else if (estado==="primera") {
    cargarFotos(fotos, 1, 0, 0, 640, 480);
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a segunda 
    cuadroTexto(0,370,640,200,255,255,0,150);
    
    
  } else if (estado==="segunda") {
    cargarFotos(fotos, 2, 0, 0, 640, 480);
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a tercera
    dibujarBoton  ( 515, 25, 100, 50); // botón para ir a tercera_alt
    cuadroTexto(0,370,640,200,255,255,0,150);
 
} else if (estado==="tercera") {
    cargarFotos(fotos, 3, 0, 0, 640, 480);
    dibujarBoton(  25, 25, 100, 50);   //Botón para ir a quinta
    cuadroTexto(0,370,640,200,255,255,0,150);
 
} else if (estado === "tercera_alt") {
    cargarFotos(fotos, 4, 0, 0, 640, 480); // Imagen del camino alterno
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a inicio
    cuadroTexto(0,370,640,200,255,255,0,150);
    
} else if (estado==="cuarta") {
    cargarFotos(fotos, 5, 0, 0, 640, 480);
    dibujarBoton(  25, 25, 100, 50);  //Botón para ir a quinta
    dibujarBoton  ( 515, 25, 100, 50); // botón para ir a quinta_alt
    cuadroTexto(0,370,640,200,255,255,0,150);
    
} else if (estado==="quinta") {
    cargarFotos(fotos, 6, 0, 0, 640, 480);
    dibujarBoton(  25, 25, 100, 50); //Botón para ir a sexta
    cuadroTexto(0,370,640,200,255,255,0,150);
    
} else if (estado === "quinta_alt") {
    cargarFotos(fotos, 7, 0, 0, 640, 480); // Imagen del camino alterno  
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a inicio
    cuadroTexto(0,370,640,200,255,255,0,150);
 
} else if (estado==="sexta") {
    cargarFotos(fotos, 8, 0, 0, 640, 480);
    dibujarBoton(  25, 25, 100, 50);  //Botón para ir a septima
    dibujarBoton  ( 515, 25, 100, 50); // botón para ir a septima_alt
    cuadroTexto(0,370,640,200,255,255,0,150);
    
  }else if (estado==="septima") {
    cargarFotos(fotos, 9, 0, 0, 640, 480);
    dibujarBoton(  25, 25, 100, 50);  //Botón para ir a octava 
    cuadroTexto(0,370,640,200,255,255,0,150);
    
  } else if (estado === "septima_alt") {
    cargarFotos(fotos, 10, 0, 0, 640, 480); // Imagen del camino alterno  
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a inicio
    cuadroTexto(0,370,640,200,255,255,0,150);
    
   }else if (estado==="octava") {
    cargarFotos(fotos, 11, 0, 0, 640, 480);
     dibujarBoton(  25, 25, 100, 50); // Botón para ir a juego
     cuadroTexto(0,370,640,200,255,255,0,150);
     
  }if (estado==="juego") {
    cargarFotos(fotos, 12, 0, 0, 640, 480);
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a decima
     
  }if (estado==="decima") {
    cargarFotos(fotos, 13, 0, 0, 640, 480);
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a final
    cuadroTexto(0,370,640,200,255,255,0,150);
 
   }if (estado==="onceava") {
    cargarFotos(fotos, 14, 0, 0, 640, 480);
    
    dibujarBoton(25, 25, 100, 50);  
    
    cuadroTexto(0,370,640,200,255,255,0,150);
   }
}
function mousePressed() {

  //esto es para especificar qa que pantalla se mueve si sucede algo

  if (estado === "inicio") {
    if (areaBoton(  25, 25, 100, 50)&& (!sonido.isPlaying())) {
      
      estado = "primera";  // Va a la primera imagen
      
      sonido.play();
    //loop lol
    sonido.loop();

      
    }
  } else if (estado==="primera") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="segunda"; // Continúa al camino normal
      
      
    }
  } else if (estado==="segunda") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="tercera";
    }else if (areaBoton  ( 515, 25, 100, 50)) {
      estado = "tercera_alt";  // Va al camino alterno
     } 
  } else if (estado==="tercera") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="cuarta";
    }  
} else if (estado === "tercera_alt") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado = "inicio"; // Botón para volver a inicio desde el camino alterno
      sonido.stop();
    }
} else if (estado==="cuarta") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="quinta";
    } else if (areaBoton  ( 515, 25, 100, 50)) {
      estado = "quinta_alt";  // Va al camino alterno
    }
  } else if (estado==="quinta") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="sexta";
    }
} else if (estado === "quinta_alt") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado = "inicio"; // Botón para volver a inicio desde el camino alterno
      
            sonido.stop();
    }
} else if (estado==="sexta") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="septima";
   }else if (areaBoton  ( 515, 25, 100, 50)) {
      estado = "septima_alt";  // Va al camino alterno
   }
  } else if (estado==="septima") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="octava";
    }
} else if (estado === "septima_alt") {
    if (areaBoton(25, 25, 100, 50)) {
      estado = "inicio"; // Botón para volver a inicio desde el camino alterno
            sonido.stop();
    }
}
  else if (estado==="octava") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="juego";
    }
    } else if (estado==="juego") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="decima";
    }
  }  else if (estado==="decima") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="onceava";
     
      
    }else if (estado==="onceava"){
     if (areaBoton(25, 25, 100, 50)) {
       
       estado = "inicio"; //tiene que volver al inicio de todo
       sonido.stop();
    }
    }
    }   
}


function dibujarBoton (px,py,an,al){
 
 if (areaBoton(px,py,an,al)){
   fill(255,255,0);
}else { 
  fill(255,200,0);
}
rect(px,py,an,al,al/4);

}

function areaBoton(x,y,an,al){

  return mouseX > x &&  mouseX < x+an && mouseY > y && mouseY < y+al;
}

function cuadroTexto(x,y,an,al,r,g,b,opa){
  fill(r,g,b,opa);
rect(x,y,an,al);
}
