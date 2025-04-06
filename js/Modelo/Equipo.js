class Equipo {
    constructor(id, nombre, ciudad, estadio) {
        this.id = id;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.estadio = estadio;
        this.jugadores = [];
    }

    // Funcion para obtener el ID del equipo
    getId() {
        return this.id;
    }

    // Funcion para obtener el nombre del equipo
    getNombre() {
        return this.nombre;
    }

    // Funcion para obtener la ciudad del equipo
    getCiudad() {
        return this.ciudad;
    }

    // Funcion para obtener el estadio del equipo
    getEstadio() {
        return this.estadio;
    }

    // Funcion para obtener la lista de jugadores del equipo
    getJugadores() {
        return this.jugadores;
    }

    // Funcion para establecer el nombre del equipo
    setNombre(nombre) {
        if (nombre != "") {
            this.nombre = nombre;
        }
    }

    // Funcion para establecer la ciudad del equipo
    setCiudad(ciudad) {
        if (ciudad != "") {
            this.ciudad = ciudad;
        }
    }

    // Funcion para establecer el estadio del equipo
    setEstadio(estadio) {
        if (estadio != "") {
            this.estadio = estadio;
        }
    }

    // Funcion para agregar un jugador al equipo
    agregarJugador(jugador) {
        this.jugadores.push(jugador);
    }

    // Funcion para eliminar un jugador del equipo
    eliminarJugador(idFutbolista) {
        id = this.buscarJugador(nombre, apellido);

        if (id != undefined) {
            for (let i = 0; i < this.jugadores.length; i++) {
                if (this.jugadores[i].id === id) {
                    this.jugadores.splice(i, 1);
                    break;
                }
            }
        }
    }

    // Funcion para buscar un jugador por nombre y apellido
    buscarJugador(nombre, apellido) {
        for (let i = 0; i < this.jugadores.length; i++) {
            if (this.jugadores[i].nombre === nombre && 
                this.jugadores[i].apellido === apellido) {
                return this.jugadores[i].id;
            }
        }
    }

    contarJugadores() {
        return this.jugadores.length;
    }
    
    contarJugadoresPorTodasLasPosiciones() {
    const posiciones = {
        portero: 0,
        defensa: 0,
        delantero: 0,
        mediocentro: 0
    };

    for (let i = 0; i < this.jugadores.length; i++) {
        const posicion = this.jugadores[i].posicion.toLowerCase();
        if (posiciones.includes(posicion)) {
            posiciones[posicion]++;
        }
    }

    return posiciones;
}
}