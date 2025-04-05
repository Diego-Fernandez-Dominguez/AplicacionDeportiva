class ModeloEquipo{
    constructor(){
        this.contador = 0;
        this.equipos = [];
    }

    agregarEquipo(nombre, ciudad, estadio){
        const equipo = new Equipo(
            this.contador++,
            nombre,
            ciudad,
            estadio
        );
        localStorage.setItem("equipos", JSON.stringify(this.equipos));
        this.equipos.push(equipo);
    }

    obtenerEquipos(){
        return this.equipos;
    }

    eliminarEquipo(nombre, ciudad){
        id=this.buscarEquipo(nombre, ciudad);

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

    buscarEquipo(nombre, ciudad){
        for (let i = 0; i < this.equipos.length; i++) {
            if (this.equipos[i].nombre === nombre && 
                this.equipos[i].ciudad === ciudad) {
                return this.equipos[i].id;
            }
        }
    }

}