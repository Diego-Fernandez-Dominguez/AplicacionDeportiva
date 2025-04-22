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

          //Actualizar la lista de los equipos en la asignacion
          this.vista.renderAJE(this.ModeloEquipo.obtenerEquipos());

          //Actualizar la lista de equipos en la vista si la tabla ya existe
          if (document.getElementById("theadJE")){
            this.vista.showstats(this.ModeloFutbolista.contarJugadoresPorTodasLasPosiciones(), this.ModeloEquipo.contarJugadoresPorCadaEquipo());
          }
        });

        //Funcionalidad del boton para mostrar las stats
        const botonST = document.getElementById("BShowStats");
        botonST.addEventListener("click", () => {
          this.vista.showstats(this.ModeloFutbolista.contarJugadoresPorTodasLasPosiciones(), this.ModeloEquipo.contarJugadoresPorCadaEquipo());
        })
      
        //Render de la asignacion de los jugadores a los equipos
        this.vista.renderAJE(this.ModeloEquipo.obtenerEquipos());

        //Funcionalidad del boton para asignar el jugador al equipo
        const formularioAJE = document.getElementById("dAJE")
        formularioAJE.addEventListener("submit", (evento)=>{
          evento.preventDefault();
          const datos = this.vista.getDatosAsignacion();
          console.log("En el controlador:", datos);
          this.ModeloEquipo.agregarJugadorAEquipo(datos);
        })
      };
}

// Iniciar controlador cuando cargue el DOM
window.addEventListener("DOMContentLoaded", () => {
  const controlador = new Controlador();
});
