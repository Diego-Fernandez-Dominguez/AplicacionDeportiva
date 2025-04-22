class ModeloEquipo {
    constructor() {
        this.contador = 0;
        this.equipos = this.cargarEquipos();
    }

    // Funcion para agregar un nuevo equipo al modelo
    agregarEquipo(objetoEquipo) {
        const equipo = new Equipo(
            this.contador++,
            objetoEquipo.nombre,
            objetoEquipo.ciudad,
            objetoEquipo.estadio
        );
        this.equipos.push(equipo);
        localStorage.setItem("equipos", JSON.stringify(this.equipos));

    }

    // Funcion para obtener la lista de equipos
    obtenerEquipos() {
        return this.equipos;
    }

    // Funcion para eliminar un equipo del modelo por nombre y ciudad
    eliminarEquipo(nombre, ciudad) {
        const id = this.buscarEquipo(nombre, ciudad);

        if (id !== undefined) {
            let i = 0;
            while (!sePudo && i < this.equipos.length) {
                if (this.equipos[i].id === id) {
                    this.equipos.splice(i, 1);
                    sePudo= true;
                }
                i++;
            }
            localStorage.setItem("equipos", JSON.stringify(this.equipos));
        }
        return sePudo;
    }

    // Funcion para buscar un equipo por nombre y ciudad
    buscarEquipo(nombre, ciudad) {
        let i = 0;

        let sePudo = false;

        while (!sePudo && i < this.equipos.length) {
            if (this.equipos[i].nombre === nombre && 
                this.equipos[i].ciudad === ciudad) {
                    sePudo=true;
                return this.equipos[i].id;
            }
            i++;
        }
        return undefined;
    }

    contarEquipos() {
        return this.equipos.length;
    }

    // Funcion para contar el numero de jugadores por cada equipo
    contarJugadoresPorCadaEquipo() {
        
        const equipos = [];
        for (let i = 0; i < this.equipos.length; i++) {
            const equipo = this.equipos[i];

            equipos.push({
                nombre: equipo.nombre,
                jugadores: equipo.jugadores.length
            });
     }

    return equipos;
    }

    cargarEquipos(){
        return JSON.parse(localStorage.getItem("equipos")) || [];
    }
}