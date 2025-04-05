class ModeloFutbolista{
    constructor() {
        this.contador = 0;
        this.futbolistas = [];
    }

    agregarFutbolista(nombre, apellido, edad, posicion) {
        const futbolista = new Futbolista(
        this.contador++,
        nombre,
        apellido,
        edad,
        posicion
        );

        localStorage.setItem("futbolistas", JSON.stringify(this.futbolistas));

    this.futbolistas.push(futbolista);

    }

    obtenerFutbolistas() {
        return this.futbolistas;
    }

    eliminarFutbolista(nombre, apellido) {

        id=this.buscarFutbolista(nombre, apellido);

        if (id != undefined) {

        for (let i = 0; i < this.futbolistas.length; i++) {
            if (this.futbolistas[i].id === id) {
                this.futbolistas.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("futbolistas", JSON.stringify(this.futbolistas));
    }
}

   buscarFutbolista(nombre, apellido) {
        for (let i = 0; i < this.futbolistas.length; i++) {
            if (this.futbolistas[i].nombre === nombre && 
                this.futbolistas[i].apellido === apellido) {
                return this.futbolistas[i].id;
            }
        }
    }


}