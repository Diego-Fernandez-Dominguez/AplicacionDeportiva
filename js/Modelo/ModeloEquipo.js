class ModeloEquipo {

    constructor() {
        this.contador = parseInt(localStorage.getItem("contadorEquipos")) || 0;
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
            localStorage.setItem("contadorEquipos", this.contador); // Guarda el contador
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

    agregarJugadorAEquipo(valores) {
        let sePudo = false;
        let jugador = valores[0];
        let objEquipo = valores[1];
    
        let idEquipo = this.buscarEquipo(objEquipo.nombre);
    
        // Obtener referencia al equipo
        let equipo = this.equipos.find(e => e.id === idEquipo);
    
        if (!equipo) {
            console.log(`No se encontró un equipo con el nombre ${objEquipo.nombre}`);
            return sePudo;
        }
    
        console.log(this.equipos);
    
        // Buscar el futbolista
        let idFut = this.modeloFutbolista.buscarFutbolista(jugador.nombre, jugador.apellidos);
    
        if (idFut === undefined) {
            console.log("El futbolista no existe.");
            return sePudo;
        }
    
        // Verificar si el futbolista ya está en el equipo
        if (equipo.jugadores.some(j => j.id === idFut)) {
            console.log(`El futbolista ${jugador.nombre} ${jugador.apellidos} ya pertenece al equipo ${equipo.nombre}.`);
            return sePudo;
        }
    
        // Obtener referencia al futbolista
        const futbolista = this.modeloFutbolista.futbolistas.find(f => f.id === idFut);
    
        if (!futbolista) {
            console.log("No se encontró el futbolista en la lista de futbolistas.");
            return sePudo;
        }
    
        console.log(`Futbolista ${futbolista.nombre} ${futbolista.apellido} agregado al equipo ${equipo.nombre}`);
    
        // Agregar el futbolista al equipo
        equipo.jugadores.push(futbolista);
    
        // Guardar los cambios en localStorage
        localStorage.setItem("equipos", JSON.stringify(this.equipos));
    
        sePudo = true;
        return sePudo;
    }

    cargarEquipos(){
        return JSON.parse(localStorage.getItem("equipos")) || [];
    }


}