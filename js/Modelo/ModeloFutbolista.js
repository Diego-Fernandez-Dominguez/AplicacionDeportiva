class ModeloFutbolista {
  constructor() {
    this.contador = parseInt(localStorage.getItem("contadorJugadores")) || 0;
    this.futbolistas = this.cargarFutbolistas();
    this.futbolista = new Futbolista();

  }

  // Funcion para agregar un nuevo futbolista al modelo
  agregarFutbolista(objetoFutbolista) {
    let sePudo = false;

    objetoFutbolista.posicion = objetoFutbolista.posicion.toLowerCase();

    //verificacion de datos de los futbolistas, no se pueden tener dos futbolistas con el
    // mismo nombre y apellido
    const futbolistaExistente = this.futbolistas.find(
      (futbolista) =>
        futbolista.nombre === objetoFutbolista.nombre &&
        futbolista.apellido === objetoFutbolista.apellido
    );

    //Si el futbolista ya existe, no se agrega o si la edad es menor a 16
    if (futbolistaExistente || objetoFutbolista.edad<16) {
      console.log("No se ha podido añadir el futbolista.");
      return sePudo;

      //Si el futbolista no existe, se agrega
    } else {
      
      if(objetoFutbolista.posicion !== "portero" &&
        objetoFutbolista.posicion !== "defensa" &&
        objetoFutbolista.posicion !== "delantero" &&
        objetoFutbolista.posicion !== "mediocentro"
      ) {
        console.log("No se ha podido añadir el futbolista ya que debe ser portero, defensa, delantero o mediocentro.");
        return sePudo;
      }

      sePudo = true;

      const futbolista = new Futbolista(
        this.contador++,
        objetoFutbolista.nombre,
        objetoFutbolista.apellidos,
        objetoFutbolista.edad,
        objetoFutbolista.posicion
      );

      this.futbolistas.push(futbolista);

      console.log(this.futbolistas);

      localStorage.setItem("futbolistas", JSON.stringify(this.futbolistas));
      localStorage.setItem("contadorJugadores", this.contador); // Guarda el contador

      return sePudo;
    }
  }

  // Funcion para obtener la lista de futbolistas
  obtenerFutbolistas() {
    return this.futbolistas;
  }

  // Funcion para eliminar un futbolista del modelo por nombre y apellido
  eliminarFutbolista(nombre, apellido) {
    const id = this.buscarFutbolista(nombre, apellido);

    let sePudo = false;

    if (id !== undefined) {
      let i = 0;
      while (!sePudo && i < this.futbolistas.length) {
        if (this.futbolistas[i].id === id) {
          this.futbolistas.splice(i, 1);
          sePudo = true;
        }
        i++;
      }
      localStorage.setItem("futbolistas", JSON.stringify(this.futbolistas));
    }
    return sePudo;
  }

  // Funcion para buscar un futbolista por nombre y apellido
  buscarFutbolista(nombre, apellido) {

    let i = 0;
    
    let sePudo = true;

    while (sePudo && i < this.futbolistas.length) {
      if (
        this.futbolistas[i].nombre === nombre &&
        this.futbolistas[i].apellido === apellido
      ) {
        sePudo = true;
        return this.futbolistas[i].id;
      }
      i++;
    }
    return -1;
  }

  //Funcion que devuelve la cantidad de futbolistas en el modelo.
  contarFutbolistas() {
    return this.futbolistas.length;
  }

  contarJugadoresPorTodasLasPosiciones() {
    const posiciones = {
      portero: 0,
      defensa: 0,
      delantero: 0,
      mediocentro: 0,
    };

    for (let i = 0; i < this.futbolistas.length; i++) {
      const posicion = this.futbolistas[i].posicion.toLowerCase();
      if (posiciones.hasOwnProperty(posicion)) {
        posiciones[posicion]++;
      }
    }

    console.log(posiciones);
    console.log(this.futbolistas);

    return posiciones;
  }

      // Funcion para agregar un equipo al futbolista
    agregarEquipo(idEquipo) {
        this.futbolista.equipo.push(idEquipo);
    }

  cargarFutbolistas() {
    return JSON.parse(localStorage.getItem("futbolistas")) || [];
  }
}
