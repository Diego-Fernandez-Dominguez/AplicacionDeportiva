class Futbolista {

    constructor(id, nombre, apellido, edad, posicion) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.posicion = posicion;
        this.equipo = [];
    }

    getId() {
        return this.id;
    }

    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }

    getEdad() {
        return this.edad;
    }

    getPosicion() {
        return this.posicion;
    }

    getEquipo() {
        return this.equipo;
    }

    setNombre(nombre) {
        if (nombre != "") {
            this.nombre = nombre;
        }
    }

    setApellido(apellido) {
        if (apellido != "") {
            this.apellido =apellido;
        }    
    }

    setPosicion(posicion) {
        if (posicion != "") {
            this.posicion = posicion;
        }    
    }

    setEdad(edad) {
        if (edad != "") {
            this.edad = edad;
        }    
    }

    agregarEquipo(idEquipo) {
        this.equipo.push(equipo);
    }

}