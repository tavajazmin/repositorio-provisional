class Menu {
  constructor(){
    this.estado = "menu";
    this.creditos = "creditos";
    this.instruc = "instrucciones";
    this.jugar = "jugar";
    //codigo del juego 
    this.jugador = new Jugador(width / 2, height - 50, 30);
    this.cubosAzules = [];  // Arreglo de cubos azules
    this.cubosAmarillos = [];  // Arreglo de cubos amarillos
    this.puntaje = 0;
    this.numCubos = 5;  // Cantidad de cubos
    this.contador = new Contador();  // Instancia del contador
    this.crearCubos();  // Crear cubos iniciales
   
  }
  
  //CODIGO PRINCIPAL DEL JUEGO
  crearCubos() {
    for (let i = 0; i < this.numCubos; i++) {
      this.cubosAzules[i] = new Cubo(random(0, width - 30), random(-200, -20), 30, color(0, 0, 255), -1);
      this.cubosAmarillos[i] = new Cubo(random(0, width - 30), random(-200, -20), 30, color(255, 255, 0), 1);
    }
  }

  // Método para actualizar el estado del juego
  actualizar() {
    background(200);
    image(iFondo,0,0,width,height);
    this.jugador.mover();
    this.jugador.mostrar();

    // Actualizar el contador
    this.contador.actualizar();
    this.contador.mostrar();

    // Verificar si el tiempo ha finalizado
    if (this.contador.tiempoFinalizado()) {
      this.verificarResultado();
      return;
    }

    // Verificar colisiones con cubos azules
    for (let i = 0; i < this.cubosAzules.length; i++) {
      this.cubosAzules[i].mover();
      this.cubosAzules[i].mostrar();
      if (this.cubosAzules[i].checarColision(this.jugador)) {
        this.puntaje += this.cubosAzules[i].valor;
        this.cubosAzules[i].reposicionar();
      }
    }

    // Verificar colisiones con cubos amarillos
    for (let i = 0; i < this.cubosAmarillos.length; i++) {
      this.cubosAmarillos[i].mover();
      this.cubosAmarillos[i].mostrar();
      if (this.cubosAmarillos[i].checarColision(this.jugador)) {
        this.puntaje += this.cubosAmarillos[i].valor;
        this.cubosAmarillos[i].reposicionar();
      }
    }

this.mostrarPuntaje(); 

  }

  // Mostrar puntaje
  mostrarPuntaje() {
    textSize(32);
    fill(255);
    textAlign(LEFT, CENTER);
text("Puntaje: " + this.puntaje, 20, 50);

  }

  //PANTALLAS PARA GANAR / PERDER
  
  verificarResultado() {
    if (this.puntaje >= 10) {
      
      background(0,0,150,150);
      fill(0, 255, 0);
      textSize(48);
      textAlign(CENTER, CENTER);
      text('¡Ganaste!', width / 2, height / 2);
      sonido.stop();
    } else {
      background(150,0,0,150);
      fill(255, 0, 0);
      textSize(48);
      textAlign(CENTER, CENTER);
      text('Perdiste', width / 2, height / 2);
      sonido.stop();
    }
  }

  // Métodos para manejar teclas
  teclapresionada(keyCode) {
    this.jugador.teclapresionada(keyCode);
  }

  teclapresionLiberada(keyCode) {
    this.jugador.teclapresionLiberada(keyCode);
  }

  //CODIGO DEL MENU
  mostrar(){
    if (this.estado === "menu"){
      this.principal(); 
    } else if (this.estado === "creditos"){
      this.credit(); 
    } else if (this.estado === "instrucciones"){
      this.instr(); 
    } else if(this.estado === "jugar"){
      this.actualizar();
    }
  }

  principal (){
    image(iMenu,0,0,width,height);
    fill (255,255,0,150);
    rect(20,20,600,400);
    fill(0);

    textAlign(CENTER,CENTER);
    textSize(40);
    text("Una Flor Amarilla", width/2, 100);
    push();
    fill(0,255,0);
    rect(250,180,150,40);
    rect(250,280,150,40);
    pop();
    text("creditos", width/2, 200);
    text("Jugar", width/2, 300);
  }

  // PANTALLA DE CREDITOS
  credit (){
    image(iCreditos,0,0,width,height);
    fill (255,255,0,150);
    rect(20,20,600,400);
    fill(0);
    textAlign(CENTER,CENTER);
    textSize(40);

    text("Creditos",width/2,50);
    textSize(40);
    text("\njuego creado por: \n Jazmin Tava y Bruno diaz",width/2, 200);
    push();
    fill(0,255,0);
    rect(180,350,280,50);
    pop();
    text("Volver al menu",width/2,height-100);
  }

  instr(){
    image(iMenu,0,0,width,height);
    fill (255,255,0,150);
    rect(20,20,600,400);
    fill(0);

    textAlign(CENTER,CENTER);
    text("Instrucciones", width/2, 100);
    push();
    textSize(25);
    push();
    fill(0,255,0);
    rect(180,350,280,50);
    pop();
    text(" \n muevete con las flechas y agarra 10 flores amarillas \n o mas antes de que se acabe el tiempo", width/2, 150);
    text("evita las otras flores", width/2, 250);
    text("toca para comenzar",width/2,height-100);
    pop();
  }

  // Cambia los estados
  cambiar() {
    if (this.estado === "menu") {
      if (mouseX > 250 && mouseX < 400 && mouseY > 180 && mouseY < 220) {
        this.estado = "creditos";
      } else if (mouseX > 250 && mouseX < 400 && mouseY > 280 && mouseY < 320) {
        this.estado = "instrucciones";
      }
    } else if (this.estado === "creditos") {
      if (mouseX > 180 && mouseX < 460 && mouseY > 350 && mouseY < 400) {
        this.estado = "menu";
      }
    } else if (this.estado === "instrucciones") {
      if (mouseX > 180 && mouseX < 460 && mouseY > 350 && mouseY < 400) {
        this.estado = "jugar";
         sonido.play();
        sonido.loop();
      }
       
      }
    } 
  }
