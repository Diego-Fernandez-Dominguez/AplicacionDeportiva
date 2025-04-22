class ModeloEquipo {
    constructor() {
        this.contador = 0;
        this.equipos = this.cargarEquipos();
    }

    // Funcion para agregar un nuevo equipo al modelo
    agregarEquipo(objetoEquipo) {

        let sePudo = false;

        //verificacion de datos de los equipos, no se pueden tener dos equipos con el
        // mismo nombre y ciudad
        const equipoExistente = this.equipos.find(equipo =>
            equipo.nombre === objetoEquipo.nombre &&
            equipo.ciudad === objetoEquipo.ciudad
        );

        //Si el equipo ya existe, no se agrega
        if(equipoExistente) {
            console.log("Ya existe un equipo con ese nombre y ciudad.");
            return sePudo;

            //Si el equipo no existe, se agrega
        } else {

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
                ciudad: equipo.ciudad,
                jugadores: equipo.jugadores.length
            });
     }

    return equipos;
    }

    agregarJugadorAEquipo(valores) {

        let sePudo = false;

        let jugador=valores[0]; 
        
        let objEquipo=valores[1]; 

            // Buscar el equipo por su ID
            const equipo = this.equipos.find(e => e.id === objEquipo.id);
        
            if (!equipo) {
                console.log(`No se encontró un equipo`);
            }

            //Comprobamos si el futbolista existe
            let idFut = ModeloFutbolista.buscarFutbolista(jugador.nombre, jugador.apellido);
            
            if (idFut == undefined) {
                console.log("El futbolista no existe.");

            } else {
                // Si el futbolista existe, lo agregamos al equipo
                equipo.jugadores.push(jugador);
                sePudo = true;
                
                ModeloFutbolista.agregarEquipo(idFut, equipo.id); // Agregar el equipo al futbolista

                console.log(`Futbolista ${jugador.nombre} ${jugador.apellido} agregado al equipo ${equipo.nombre}`);

                // Guardar los cambios en localStorage
                localStorage.setItem("equipos", JSON.stringify(this.equipos));
                sePudo= true;
            }

            return sePudo;
            
        }
    

    cargarEquipos(){
        return JSON.parse(localStorage.getItem("equipos")) || [];
    }
}