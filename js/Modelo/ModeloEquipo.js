class ModeloEquipo {

    constructor() {
        this.contador = 0;
        this.equipos = this.cargarEquipos();
        this.modeloFutbolista = new ModeloFutbolista(); // Instancia directa de ModeloFutbolista
    }

    // Funcion para agregar un nuevo equipo al modelo
    agregarEquipo(objetoEquipo) {
        let sePudo = false;

        // Verificación de datos de los equipos, no se pueden tener dos equipos con el mismo nombre
        const equipoExistente = this.equipos.find(equipo =>
            equipo.nombre === objetoEquipo.nombre
        );

        // Si el equipo ya existe, no se agrega
        if (equipoExistente) {
            console.log("Ya existe un equipo con ese nombre.");
            return sePudo;
        } else {
            // Si el equipo no existe, se agrega
            sePudo = true;
            const equipo = new Equipo(
                this.contador++,
                objetoEquipo.nombre,
                objetoEquipo.ciudad,
                objetoEquipo.estadio
            );

            this.equipos.push(equipo);
            localStorage.setItem("equipos", JSON.stringify(this.equipos));
            return sePudo;
        }
    }

    // Funcion para obtener la lista de equipos
    obtenerEquipos() {
        return this.equipos;
    }

    // Funcion para eliminar un equipo del modelo por nombre y ciudad
    eliminarEquipo(nombre) {
        const id = this.buscarEquipo(nombre);

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
    buscarEquipo(nombre) {
        let i = 0;

        let sePudo = false;

        while (!sePudo && i < this.equipos.length) {
            if (this.equipos[i].nombre === nombre) {
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
                ciudad: equipo.ciudad,
                jugadores: equipo.jugadores.length
            });

     }

    return equipos;
    }

    // Funcion para agregar un jugador a un equipo
    agregarJugadorAEquipo(valores) {
        let sePudo = false;

        let jugador = valores[0];
        let objEquipo = valores[1];

        console.log(valores);

        // Buscar el equipo por su nombre
        let idEquipo = this.buscarEquipo(objEquipo.nombre);
        let equipo = this.equipos.find(equipo => equipo.id === idEquipo);

        if (!equipo) {
            console.log(`No se encontró un equipo`);
            return sePudo;
        }

        console.log(jugador.apellidos);

        // Comprobamos si el futbolista existe
        let idFut = this.modeloFutbolista.buscarFutbolista(jugador.nombre, jugador.apellidos);

        if (idFut == undefined) {
            console.log("El futbolista no existe.");
        } else {
            // Si el futbolista existe, lo agregamos al equipo
            if (!Array.isArray(equipo.jugadores)) {
                equipo.jugadores = [];
            }
            equipo.jugadores.push(jugador);
            sePudo = true;

            // Agregar el equipo al futbolista
            this.modeloFutbolista.agregarFutbolistaAlEquipo(idFut, equipo.id);

            console.log(`Futbolista ${jugador.nombre} ${jugador.apellidos} agregado al equipo ${equipo.nombre}`);

            // Guardar los cambios en localStorage
            localStorage.setItem("equipos", JSON.stringify(this.equipos));
        }

        return sePudo;
    }

    cargarEquipos(){
        return JSON.parse(localStorage.getItem("equipos")) || [];
    }


}