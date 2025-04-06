class ModeloFutbolista {
    constructor() {
        this.contador = 0;
        this.futbolistas = [];
    }

    // Funcion para agregar un nuevo futbolista al modelo
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

    // Funcion para obtener la lista de futbolistas
    obtenerFutbolistas() {
        return this.futbolistas;
    }

    // Funcion para eliminar un futbolista del modelo por nombre y apellido
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

    // Funcion para buscar un futbolista por nombre y apellido
    buscarFutbolista(nombre, apellido) {
        for (let i = 0; i < this.futbolistas.length; i++) {
            if (this.futbolistas[i].nombre === nombre && 
                this.futbolistas[i].apellido === apellido) {
                return this.futbolistas[i].id;
            }
        }
    }

    contarFutbolistas() {
        return this.futbolistas.length;
    }
}