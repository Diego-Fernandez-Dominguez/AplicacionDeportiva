class Controlador {
  constructor() {
    this.vista = new Vista();

    // Estructura para almacenar datos
    this.jugadores = [];
    this.equipos = [];

    // Estadísticas: jugadores por posición
    this.jugadoresPorPosicion = {
      Porteros: 0,
      Defensas: 0,
      Delanteros: 0,
      "Medio-Centros": 0,
    };

    // Estadísticas: jugadores por equipo
    this.jugadoresPorEquipo = {};

    // Inicializar eventos
    this.initEventos();
  }

  initEventos() {
    // Agregar jugador
    this.vista.renderAJugador();
    const formJugador = document.getElementById("formulario");
    formJugador.addEventListener("submit", (evento) => {
      evento.preventDefault();
      const datos = {
        nombre: document.getElementById("nombre").value,
        apellidos: document.getElementById("apellidos").value,
        posicion: document.getElementById("posicion").value,
        edad: parseInt(document.getElementById("edad").value),
      };
      this.agregarJugador(datos);
      document.getElementById("fAgregarJugador").close();
    });

    // Agregar equipo
    this.vista.renderAEquipo();
    const formEquipo = document.querySelector("#fAgregarEquipo form");
    formEquipo.addEventListener("submit", (evento) => {
      evento.preventDefault();
      const datos = {
        nombre: formEquipo.nombre.value,
        ciudad: formEquipo.ciudad.value,
        estadio: formEquipo.estadio.value,
      };
      this.agregarEquipo(datos);
      document.getElementById("fAgregarEquipo").close();
    });

    // Mostrar estadísticas
    this.vista.BShowStats.addEventListener("click", () => {
      this.vista.showstats(this.jugadoresPorPosicion, this.jugadoresPorEquipo);
    });
  }

  agregarJugador(jugador) {
    this.jugadores.push(jugador);

    // Aumentar contador de posición si es válida
    if (this.jugadoresPorPosicion[jugador.posicion] !== undefined) {
      this.jugadoresPorPosicion[jugador.posicion]++;
    } else {
      this.jugadoresPorPosicion[jugador.posicion] = 1;
    }
  }

  agregarEquipo(equipo) {
    this.equipos.push(equipo);
    this.jugadoresPorEquipo[equipo.nombre] = 0;
  }
}

// Iniciar controlador cuando cargue el DOM
window.addEventListener("DOMContentLoaded", () => {
  const controlador = new Controlador();
});
