class ModeloEquipo{
    constructor(){
        this.equipos = [];
    }

    agregarEquipo(equipo){
        this.equipos.push(equipo);
    }

    obtenerEquipos(){
        return this.equipos;
    }

}