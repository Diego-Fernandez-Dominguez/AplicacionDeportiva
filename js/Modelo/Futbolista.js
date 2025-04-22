class Futbolista {

    constructor(id, nombre, apellido, edad, posicion) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.posicion = posicion;
    }

    // Funcion para obtener el ID del futbolista
    getId() {
        return this.id;
    }

    // Funcion para obtener el nombre completo del futbolista
    getNombreCompleto() {
        return this.nombre + " " + this.apellido;
    }

    // Funcion para obtener la edad del futbolista
    getEdad() {
        return this.edad;
    }

    // Funcion para obtener la posicion del futbolista
    getPosicion() {
        return this.posicion;
    }

    // Funcion para establecer la posicion del futbolista
    setPosicion(posicion) {
        if (posicion != "") {
            this.posicion = posicion;
        }    
    }

    // Funcion para establecer la edad del futbolista
    setEdad(edad) {
        if (edad != "") {
            this.edad = edad;
        }    
    }

}
