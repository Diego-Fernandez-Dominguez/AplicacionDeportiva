class ModeloEquipo {
    constructor() {
        this.contador = 0;
        this.equipos = [];
    }

    // Funcion para agregar un nuevo equipo al modelo
    agregarEquipo(nombre, ciudad, estadio) {
        const equipo = new Equipo(
            this.contador++,
            nombre,
            ciudad,
            estadio
        );
        localStorage.setItem("equipos", JSON.stringify(this.equipos));
        this.equipos.push(equipo);
    }

    // Funcion para obtener la lista de equipos
    obtenerEquipos() {
        return this.equipos;
    }

    // Funcion para eliminar un equipo del modelo por nombre y ciudad
    eliminarEquipo(nombre, ciudad) {
        id = this.buscarEquipo(nombre, ciudad);

        if (id != undefined) {
            for (let i = 0; i < this.equipos.length; i++) {
                if (this.equipos[i].id === id) {
                    this.equipos.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem("equipos", JSON.stringify(this.equipos));
        }
    }

    // Funcion para buscar un equipo por nombre y ciudad
    buscarEquipo(nombre, ciudad) {
        for (let i = 0; i < this.equipos.length; i++) {
            if (this.equipos[i].nombre === nombre && 
                this.equipos[i].ciudad === ciudad) {
                return this.equipos[i].id;
            }
        }
    }
}