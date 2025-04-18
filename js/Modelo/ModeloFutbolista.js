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

    this.futbolistas.push(futbolista);

    localStorage.setItem("futbolistas", JSON.stringify(this.futbolistas));

    }

    // Funcion para obtener la lista de futbolistas
    obtenerFutbolistas() {
        return this.futbolistas;
    }

    // Funcion para eliminar un futbolista del modelo por nombre y apellido
    eliminarFutbolista(nombre, apellido) {

        const id = this.buscarFutbolista(nombre, apellido);

        let sePudo = false;

        if (id !== undefined) {
            let i = 0;
            while (!sePudo && i < this.futbolistas.length) {
                if (this.futbolistas[i].id === id) {
                    this.futbolistas.splice(i, 1);
                    sePudo = true;
                }
                i++;
            }
            localStorage.setItem("futbolistas", JSON.stringify(this.futbolistas));
        }
        return sePudo;
    }

    // Funcion para buscar un futbolista por nombre y apellido
    buscarFutbolista(nombre, apellido) {

        let i = 0;

        let sePudo = false;

        while (!sePudo === false && i < this.futbolistas.length) {
            if (this.futbolistas[i].nombre === nombre && 
                this.futbolistas[i].apellido === apellido) {
                sePudo = true;
                return this.futbolistas[i].id;
            }
            i++;
        }
        return undefined;
    }

    //Funcion que devuelve la cantidad de futbolistas en el modelo.
    contarFutbolistas(){
        return this.futbolistas.length;
    }
}