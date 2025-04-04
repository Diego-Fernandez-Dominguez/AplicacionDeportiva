class Vista{

    constructor() {
        this.form = document.getElementById("formularioFutbolista");
    }

    getFutbolistaInput() {
        return {
            nombre: this.form.elements["nombre"].value,
            apellido: this.form.elements["apellido"].value,
            año: this.form.elements["año"].value,
            posicion: this.form.elements["posicion"].value
        };
    }

    renderFurbolistas(futbolistas) {
        this.futbolistas.innerHTML = "";
        futbolistas.forEach(futbolistas => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${Futbolista.nombre}</td>
                <td>${Futbolista.apellido}</td>
                <td>${Futbolista.posicion}</td>
                <td>${Futbolista.año}</td>
            `;
            this.taskList.appendChild(row);
        });
    }

}