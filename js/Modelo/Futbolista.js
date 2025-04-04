class Futbolista {
    constructor(nombre, apellido, año, posicion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.año = año;
        this.posicion = posicion;
    }

    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
    getEdad() {
        const fechaActual = new Date();
        const añoActual = fechaActual.getFullYear();
        return añoActual - this.año;
    }

    getPosicion() {
        return this.posicion;
    }

}