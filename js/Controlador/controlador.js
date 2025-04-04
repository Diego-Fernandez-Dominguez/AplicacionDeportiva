class Controlador{

    constructor(modelo, vista){
        this.modelo = modelo;
        this.vista = vista;
        this.init();
    }

    init(){
        this.vista.addEventListener("submit", (event) => {
            event.preventDefault();
            this.añadirFutbolista();
        }
        );
    }

    añadirFutbolista(){
        const futbolista = new Futbolista(this.vista.getNombre(), this.vista.getApellido(), this.vista.getAño(), this.vista.getPosicion());
        this.actualizarVista();
    }

    actualizarVista(){
        this.vista.render(this.modelo.futbolistas);
    }

}
    document.addEventListener("DOMContentLoaded", () => {
        const model = new TaskModel();
        const view = new TaskView();
        const controller = new TaskController(model, view);
    });