class Equipo{
    constructor(id, nombre, ciudad, estadio){
        this.id = id;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.estadio = estadio;
        this.futbolistas = [];
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

    getFutbolistas(){
        return this.futbolistas;
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

    agregarFutbolista(futbolista){
        this.futbolistas.push(futbolista);
    }

    eliminarFutbolista(idFutbolista){
        for(let i = 0; i < this.futbolistas.length; i++){
            if(this.futbolistas[i].getId() === idFutbolista){
                this.futbolistas.splice(i, 1);
                break;
            }
        }
    }
   /* buscarFutbolista(idFutbolista){
        for(let i = 0; i < this.futbolistas.length; i++){
            if(this.futbolistas[i].getId() === idFutbolista){
                return this.futbolistas[i];
            }
        }
    }*/

}