class Equipo{
    constructor(id, nombre, ciudad, estadio){
        this.id = id;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.estadio = estadio;
        this.jugadores = [];
    }

    getId(){
        return this.id;
    }
    
    getNombre(){
        return this.nombre;
    }

    getCiudad(){
        return this.ciudad;
    }

    getEstadio(){
        return this.estadio;
    }

    getJugadores(){
        return this.jugadores;
    }

    setNombre(nombre){
        if(nombre != ""){
            this.nombre = nombre;
        }
    }

    setCiudad(ciudad){
        if(ciudad != ""){
            this.ciudad = ciudad;
        }
    }

    setEstadio(estadio){
        if(estadio != ""){
            this.estadio = estadio;
        }
    }

    agregarJugador(jugador){
        this.jugadores.push(jugador);
    }

    eliminarJugador(idFutbolista){
        id=this.buscarJugador(nombre, apellido);

        if (id != undefined) {

        for (let i = 0; i < this.jugadores.length; i++) {
            if (this.jugadores[i].id === id) {
                this.jugadores.splice(i, 1);
                break;
            }
        }
    }
    }

    buscarJugador(nombre, apellido){
        for (let i = 0; i < this.jugadores.length; i++) {
            if (this.jugadores[i].nombre === nombre && 
                this.jugadores[i].apellido === apellido) {
                return this.jugadores[i].id;
            }
        }
    }

}