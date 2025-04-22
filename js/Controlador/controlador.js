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

  //Inicializar eventos y manejar el envio de datos a los diferentes modelos
  initEventos() {
    // Agregar jugador pop-up
    this.vista.renderAJugador();


    //Envio de datos del jugador al controlador
    const formularioJ = document.getElementById("formularioJ")
    formularioJ.addEventListener("submit", (evento) =>{
      evento.preventDefault();
      

      const datos = this.vista.getDatosJugador();
      
      console.log("En el controlador:", datos);
      this.ModeloFutbolista.agregarFutbolista(datos);
      console.log("Datos del jugador enviados al controlador");
      
      //Actualizar la lista de jugadores en la vista si la tabla ya existe
      if (document.getElementById("theadJPP")){
        this.vista.showstats(this.ModeloFutbolista.contarJugadoresPorTodasLasPosiciones(), this.ModeloEquipo.contarJugadoresPorCadaEquipo());
      }
    })


    //Render del pop-up para agregar el equipo
    this.vista.renderAEquipo();

        //Envio de datos del jugador al controlador
        const formularioE = document.getElementById("formularioE");
        formularioE.addEventListener("submit", (evento) =>{
          evento.preventDefault();
          const datos = this.vista.getDatosEquipo();
          console.log("En el controlador:", datos);
          this.ModeloEquipo.agregarEquipo(datos);
          console.log("Datos del equipo enviados al controlador");

          //Actualizar la lista de equipos en la vista si la tabla ya existe   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!POR HACER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          if (document.getElementById("")){
            this.vista.showstats(this.ModeloFutbolista.contarJugadoresPorTodasLasPosiciones(), this.ModeloEquipo.contarJugadoresPorCadaEquipo());
          }
        });


        const botonST = document.getElementById("BShowStats");
        botonST.addEventListener("click", () => {
          this.vista.showstats(this.ModeloFutbolista.contarJugadoresPorTodasLasPosiciones(), this.ModeloEquipo.contarJugadoresPorCadaEquipo());
        })};
}

// Iniciar controlador cuando cargue el DOM
window.addEventListener("DOMContentLoaded", () => {
  const controlador = new Controlador();
});
