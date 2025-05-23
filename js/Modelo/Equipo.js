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

    // Funcion para establecer el estadio del equipo
    setEstadio(estadio) {
        if (estadio != "") {
            this.estadio = estadio;
        }
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

}