// Controlador.js
class Controlador {
    constructor(modelo) {
      this.modelo = modelo; // Instancia del Modelo que el Controlador va a utilizar
      this.vista = new Vista();
      this.vista.agregarJ();
    }
  
    // Método para agregar un jugador
    agregarJugador(nombre, posicion,año, equipo) {
      // Primero validamos los datos ingresados por el usuario
      const mensaje = this.validarDatos(nombre, posicion,año, equipo);
  
      // Si la validación falla, mostramos un mensaje de error en la Vista
      if (mensaje) {
        this.actualizarVista(mensaje);
        return;
      }
  
      // Si los datos son válidos, llamamos al Modelo para agregar el jugador
      const resultado = this.modelo.agregarJugador(nombre, posicion,año, equipo);
  
      // Actualizamos la Vista con el resultado del Modelo (mensaje de éxito o error)
      this.actualizarVista(resultado);
    }
  
    // Método para validar los datos antes de enviarlos al Modelo
    validarDatos(nombre, posicion,año, equipo) {
      if (!nombre || !posicion || !año||!equipo) {
        return 'Todos los campos son obligatorios.'; // Mensaje de error si falta algún dato
      }
      if (isNaN(edad) || edad <16) {
        return 'La edad debe ser un número mayor que 15.'; // Mensaje de error si la edad no es válida
      }
      return null; // Los datos son válidos
    }
  
    // Método para actualizar la Vista con el mensaje de resultado (éxito o error)
    actualizarVista(mensaje) {
      // Actualizar el DOM con el mensaje (este es un ejemplo donde el mensaje se muestra en un <div>)
      const mensajeDiv = document.getElementById('mensaje');
      if (mensajeDiv) {
        mensajeDiv.textContent = mensaje;
      }
    }
  }

  window.addEventListener("DOMContentLoaded", () => {
    const modeloE = new ModeloEquipo();
    const modeloF = new ModeloFutbolista();
    const appE = new Controlador(modeloE);
    const appF = new Controlador(modeloF);
});
  
    