class Controlador {
  constructor() {
    this.vista = new Vista();
    this.ModeloEquipo = new ModeloEquipo();
    this.ModeloFutbolista = new ModeloFutbolista();
    this.Equipo = new Equipo();
    this.Futbolista = new Futbolista();

    
    // Inicializar eventos
    this.initEventos();
  }

  initEventos() {
    // Agregar jugador pop-up
    this.vista.renderAJugador();


    //Envio de datos del jugador al controlador
    const botonSJ = document.getElementById("submitJ");
    botonSJ.addEventListener("click", (evento) =>{
      this.ModeloFutbolista.agregarFutbolista(this.vista.getDatosJugador());
      console.log("Datos del jugador enviados al controlador");
    })



    this.vista.renderAEquipo();

        //Envio de datos del jugador al controlador
        const botonSE = document.getElementById("submitE");
        botonSE.addEventListener("click", (evento) =>{
          this.ModeloEquipo.agregarEquipo(this.vista.getDatosEquipo());
          console.log("Datos del equipo enviados al controlador");
        })

    
    this.vista.showstats(this.Equipo.contarJugadoresPorTodasLasPosiciones(), this.ModeloEquipo.contarJugadoresPorCadaEquipo());
  }
  
}

// Iniciar controlador cuando cargue el DOM
window.addEventListener("DOMContentLoaded", () => {
  const controlador = new Controlador();
});
