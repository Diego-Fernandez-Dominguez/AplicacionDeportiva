class Futbolista {

    constructor(id, nombre, apellido, edad, posicion) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.posicion = posicion;
        this.equipo = [];
    }

    // Funcion para obtener el ID del futbolista
    getId() {
        return this.id;
    }

    // Funcion para obtener el nombre completo del futbolista
    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }

    // Funcion para obtener la edad del futbolista
    getEdad() {
        return this.edad;
    }

    // Funcion para obtener la posicion del futbolista
    getPosicion() {
        return this.posicion;
    }

    // Funcion para obtener el equipo del futbolista
    getEquipo() {
        return this.equipo;
    }

    // Funcion para establecer el nombre del futbolista
    setNombre(nombre) {
        if (nombre != "") {
            this.nombre = nombre;
        }
    }

    // Funcion para establecer el apellido del futbolista
    setApellido(apellido) {
        if (apellido != "") {
            this.apellido = apellido;
        }    
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

    // Funcion para agregar un equipo al futbolista
    agregarEquipo(idEquipo) {
        this.equipo.push(equipo);
    }

}