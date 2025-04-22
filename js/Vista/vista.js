class Vista {
  constructor() {
    this.BAgregarJ = document.getElementById("BAgregarJ");
    this.BAgregarE = document.getElementById("BAgregarE");
    this.BAsignarJE = document.getElementById("BAsignarJE");
    this.BShowStats = document.getElementById("BShowStats");
  }

  //Mostrar las stats
  showstats(jugadoresPP, jugadoresPE) {    

    const botonST = document.getElementById("BShowStats");
    botonST.addEventListener("click", () => {
          //Tabla jugadores por posicion
    const tablaJPP = document.createElement("table");
    tablaJPP.border = "1";

    //Encabezado de los jugadores por posicion
    const theadJPP = document.createElement("thead");

    //Relleno del encabezado
    theadJPP.innerHTML = ` 
    <tr>
      <th>Posición</th>
      <th>Número de Jugadores</th>
    </tr>`;

    //Appendeo del encabezado a la tabla
    tablaJPP.appendChild(theadJPP);

    //Creacion del cuerpo
    const tbodyJPP = document.createElement("tbody");
    
    //Relleno del cuerpo
    tbodyJPP.innerHTML = `
    <tr>
      <td>Portero</td>
      <td>${jugadoresPP.portero}</td>
    </tr>
    
    <tr>
      <td>Defensa</td>
      <td>${jugadoresPP.defensa}</td>
    </tr>

    <tr>
      <td>Delantero</td>
      <td>${jugadoresPP.delantero}</td>
    </tr>
    
    <tr>
    <td>Mediocentro</td>
      <td>${jugadoresPP.mediocentro}</td>
    </tr>`;
    
    
    //Appendeo del cuerpo a la tabla
    tablaJPP.appendChild(tbodyJPP);

    //Contenedor de la tabla
    const contenedorTabla = document.getElementById("cShowStats");
    
    //Limpio el contenedor de la tabla
    contenedorTabla.innerHTML = "";

    //Asignacion de valores a la tabla
    contenedorTabla.appendChild(tablaJPP);



  })};

  //Pop-up de agregar el jugador
  renderAJugador() {
    const container = document.getElementById("cfAgregarJ");

    container.innerHTML = `
                <dialog id="fAgregarJugador">
                <button type = "button" id = "XDeCierre">X</button>
                <h3>Agregar Jugador</h3>
                    <form id = "formularioJ" method="dialog">
                        <label>Nombre</label>
                        <input type="text" class="inputs" id="nombre" name="nombre" placeholder="Nombre" required><br><br>
                        <label>Apellidos</label>
                        <input type="text" class="inputs" id = "apellido" name="apellidos" placeholder="Apellidos" required><br><br>
                        <label>Posicion</label>
                        <input type="text" class="inputs" id = "posicion" name="posicion" placeholder="Posición" required><br><br>
                        <label>Edad</label>
                        <input type="number" class="inputs" id = "edad" name="Edad" placeholder="Edad" required><br><br>
                        <button class="btsEnviar" id = "submitJ" >Agregar Jugador</button>
                    </form>
                </dialog>  
            `;

    //abrir pop-up
    const dialog = document.getElementById("fAgregarJugador");
    const bAbrir = document.getElementById("BAgregarJ");
    bAbrir.addEventListener("click", () => {
      dialog.showModal();
    });

    //Cerrar el pop-up con la X
    const bCierre = document.getElementById("XDeCierre");
    bCierre.addEventListener("click", () => {
      dialog.close();
    });
  }

  //Captura de los datos del jugador
  getDatosJugador() {
      //Recojo datos
      const datos = {
        nombre: document.getElementById("nombre").value,
        apellidos: document.getElementById("apellido").value,
        posicion: document.getElementById("posicion").value,
        edad: parseInt(document.getElementById("edad").value),
      };

      //Limpio los datos de los inputs
      document.getElementById("nombre").value = "";
      document.getElementById("apellido").value = "";
      document.getElementById("posicion").value = "";
      document.getElementById("edad").value = "";

      console.log("En la vista" + datos);

      //Envio datos al controlador
      return datos;
  }

  //Pop-up de agregar el equipo
  renderAEquipo() {
    const container = document.getElementById("cfAgregarE");
    container.innerHTML = `
            <dialog id="fAgregarEquipo">
                <form method="dialog" id = "formularioE">
                <button type = "button" id = "XDeCierreE">X</button>
                <h3>Agregar Equipo</h3>
                <label>Nombre</label>
                <input type="text" id = "nombreE" class="inputs" name="nombre" placeholder="Nombre"  required><br><br>
                <label>Ciudad</label>
                <input type="text"  id = "ciudad" class="inputs" name="ciudad" placeholder="Ciudad" required><br><br>
                <label>Estadio</label>
                <input type="text"  id = "estadio" class="inputs" name="estadio" placeholder="Estadio" required><br><br>
                <button class="btsEnviar" id = "submitE">Agregar Equipo</button>
                </form>
            </dialog>
            `;

    //Abrir el pop-up
    const dialog = document.getElementById("fAgregarEquipo");
    const bAbrir = document.getElementById("BAgregarE");
    bAbrir.addEventListener("click", () => {
      dialog.showModal();
    });

    //Cerrar el pop-up con la x
    const bCierre = document.getElementById("XDeCierreE");
    bCierre.addEventListener("click", () => {
      dialog.close();
    });
  }

  //Captura de datos del equipo
  getDatosEquipo() {
      //Recojo datos
      const datos = {
        nombre : document.getElementById("nombreE").value,
        ciudad : document.getElementById("ciudad").value,
        estadio : document.getElementById("estadio").value,
      };

      //Limpio los datos de los inputs
      document.getElementById("nombreE").value = "";
      document.getElementById("ciudad").value = "";
      document.getElementById("estadio").value = "";

      //Envio datos al controlador
      return datos;
  }
}
