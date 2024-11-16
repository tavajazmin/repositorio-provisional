class ContadorRegresivo {
  constructor(duracion) {
    this.duracion = duracion;
    this.startTime = millis(); // Guarda el tiempo de inicio
    this.segundosEnteros = 0;
    
    this.tiempoTexto = 0;
  }

  actualizar() {
    this.tiempoTranscurrido = (millis() - this.startTime) / 1000; // Calcula el tiempo transcurrido en segundos
    this.tiempoRestante = this.duracion - this.tiempoTranscurrido; // cuenta regresiva para atras
    // Asegura que el tiempo restante no sea negativo
    if (this.tiempoRestante < 0) {
      this.tiempoRestante = 0;
    }

    this.segundosEnteros = this.tiempoRestante | 0;
   

    // Construye el texto de tiempo
    this.tiempoTexto = "Tiempo: " + this.segundosEnteros + ".s";
  }

  mostrar() {
    fill(0); // Color del texto
    textSize(32); // Tamaño del texto
    textAlign(CENTER, CENTER); // Alineación del texto

    text(this.tiempoTexto, width / 2, height / 2); 
  }

  haTerminado() {
    return this.tiempoRestante <= 0;
  }
}
