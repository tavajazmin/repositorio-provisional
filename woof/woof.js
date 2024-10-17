let fotos = [];

let estado;
//DEJE ALGO EN EL INDEX, FIJATE QUE ESTA APARTE, AÑADILO A EL TP FINAL
//fijate en la carpeta libraries, hay otro archivo que necesitas añadir para que funque, dice algo de sound
//SONIDO
let sonido;

function preload() {
  
  //SONIDO
sonido = loadSound("data/cajaloop.mp3");
  
  for (let i=0; i<9; i++) {
    fotos[i] = loadImage("data/foto"+i+".png");
  }
}

function setup(){
 createCanvas(640, 480);
  for (let i=0; i<8; i++) {
    fotos[i].resize(640,480);
  }
 estado = "inicio";
  
}

function draw() {
  background(0);  
  
  if (estado==="inicio"){
cargarFotos(fotos,0,0,0,640,480); 

 dibujarBoton(220, 380, 200, 50);

}else if (estado==="primera"){
  
cargarFotos(fotos,1,0,0,640,480);

dibujarBoton(20, 300, 50, 40);

cuadroTexto(0,370,640,200,255,255,0,150); 

}else if (estado==="segunda"){

cargarFotos(fotos,2,0,0,640,480);
    
    dibujarBoton(20, 300, 50, 40);

    
}else if (estado==="tercera"){

cargarFotos(fotos,3,0,0,640,480);

dibujarBoton(20, 300, 50, 40);


}else if (estado==="cuarta"){

cargarFotos(fotos,4,0,0,640,480);

dibujarBoton(20, 300, 50, 40);


}else if (estado==="quinta"){

cargarFotos(fotos,5,0,0,640,480);

dibujarBoton(20, 300, 50, 40);


}else if (estado==="sexta"){

cargarFotos(fotos,6,0,0,640,480);

dibujarBoton(20, 300, 50, 40);


}else if (estado==="septima"){

cargarFotos(fotos,7,0,0,640,480);

dibujarBoton(20, 300, 50, 40);

}else if (estado==="octava"){

cargarFotos(fotos,8,0,0,640,480);

dibujarBoton(20, 300, 50, 40);


}
}

function mousePressed(){
  
  //esto es para especificar qa que pantalla se mueve si sucede algo
  
  if (estado === "inicio"){
    
     if (areaBoton(220, 380, 200, 50)&& (!sonido.isPlaying())) { //EL AND ES PARA DECIR QUE TAMBIEN SE VA A EJECUTAR ALGO MAS
   //ESTO HACE QUE NI BIEN SE INICIE LA AVENTURA COMIENCE LA MUSICA
   estado = "primera"; 
   
    sonido.play();
    //loop lol
    sonido.loop();

     }
     
  }else if (estado==="primera") {
    if (areaBoton(20, 300, 50, 40)) {
      
 estado="segunda";

   
    
  }else if (estado==="segunda") {
    if(areaBoton(20, 300, 50, 40)){
    
 estado="tercera";

    }
}else if (estado==="tercera") {
 estado="cuarta";
 
}else if (estado==="cuarta") {
 estado="quinta";
 
}else if (estado==="quinta") {
 estado="sexta";
 
}else if (estado==="sexta") {
 estado="septima";

}else if (estado==="septima"){
 estado="octava";

}
}
}
