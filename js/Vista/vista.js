class Vista {
  constructor() {
    this.BAgregarJ = document.getElementById("BAgregarJ");
    this.BAgregarE = document.getElementById("BAgregarE");
    this.BAsignarJE = document.getElementById("BAsignarJE");
    this.BShowStats = document.getElementById("BShowStats");
  }

  //Mostrar las stats
  showstats(jugadoresPP, jugadoresPE) {
    //Tabla jugadores por posicion
    const tablaJPP = document.createElement("table");
    tablaJPP.border = "1";

    //Encabezado de los jugadores por posicion
    const theadJPP = document.createElement("thead");

    //Relleno del encabezado
    theadJPP.innerHTML = ` 
    <tr id ="theadJPP">
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
    const contenedorTabla = document.getElementById("cShowStatsJP");

    //Limpio el contenedor de la tabla
    contenedorTabla.innerHTML = ``;

    //Asignacion de valores a la tabla
    contenedorTabla.appendChild(tablaJPP);

    //Tabla de jugadores por equipo
    const tablaJE = document.createElement("table");
    tablaJE.border = "1";

    //Encabezado de los jugadores por posicion
    const theadJE = document.createElement("thead");

    //Relleno del encabezado
    theadJE.innerHTML = ` 
    <tr id ="theadJE">
      <th>Equipo</th>
      <th>Número de Jugadores</th>
    </tr>`;

    //Appendeo del encabezado a la tabla
    tablaJE.appendChild(theadJE);

    //Creacion del cuerpo
    const tbodyJE = document.createElement("tbody");

    //Relleno del cuerpo
    jugadoresPE.forEach((element) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${element.nombre}</td>
        <td>${element.jugadores}</td>
      `;

      tbodyJE.appendChild(fila);
    });

    //Append a la tabla
    tablaJE.appendChild(tbodyJE);

    //Contenedor de la tabla
    const containerJE = document.getElementById("cShowStatsJE");

    //Vacio el contenedor
    containerJE.innerHTML = ``;

    //Append al contenedor
    containerJE.appendChild(tablaJE);
  }

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
      nombre: document.getElementById("nombreE").value,
      ciudad: document.getElementById("ciudad").value,
      estadio: document.getElementById("estadio").value,
    };

    //Limpio los datos de los inputs
    document.getElementById("nombreE").value = "";
    document.getElementById("ciudad").value = "";
    document.getElementById("estadio").value = "";

    //Envio datos al controlador
    return datos;
  }

  renderAJE(ArrayEquipos) {
    //Pop-up
    const contenedor = document.getElementById("cfAsignarJE");
    contenedor.innerHTML = `
      <div id="cFormularioAJE">
          <dialog id="dAJE">
            <div id="cBAJE">
              <button id="XDeCierreAJE">X</button>
            </div>
            <div id = "cTituloAJE">
              <h3 id="tTituloAJE">Asignar Jugador<br> a Equipo</h3>
            </div>
              <form method="dialog">
                  <div id="cInputJugador">
                      <label for="nombre">Nombre del Jugador</label>
                      <input type="text" class="inputs" id="nombreAJE" name="nombre" placeholder="Nombre" required>

                      <label for="apellidos">Apellidos del Jugador</label>
                      <input type="text" class="inputs" id="apellidosAJE" name="apellidos" placeholder="Apellidos" required>
                  </div>

                  <div id="cInputEquipo">
                      <label for="equipos">Equipo</label>
                      <select name="equipos" id="sEquiposAJE">
                          <option value="" disabled selected hidden id = "opcionAJE">Selecciona un equipo</option>
                      </select>
                  </div>
                  <div id = "cBAsignar">
                    <button id = "bAsignar">Asignar</button>
                  </div>
              </form>
          </dialog>
      </div>
    `;

    //Render de los equipos en el select
    ArrayEquipos.forEach((equipo)=>{
      const select = document.getElementById("sEquiposAJE");
      const option = document.createElement("option");
      option.value = equipo.nombre;
      option.innerHTML = `
      ${equipo.nombre}
      `;
      select.appendChild(option);
    })

    //Abrir el pop-up
    const dialog = document.getElementById("dAJE");
    const botonDeAbertura = document.getElementById("BAsignarJE");
    botonDeAbertura.addEventListener("click", () => {
      dialog.showModal();
    });

    //Cerrar el dialog con la X
    const botonDeCierre = document.getElementById("XDeCierreAJE");
    botonDeCierre.addEventListener("click", () => {
      dialog.close();
    });
  }

  getDatosAsignacion(){
    
    //Recojida de datos
    const futbolista = {
      nombre: document.getElementById("nombreAJE").value,
      apellidos: document.getElementById("apellidosAJE").value
    }

    const equipo = {
      nombre: document.getElementById("sEquiposAJE").value
    }
    console.log(equipo.nombre)
    
    const datos = [
      futbolista,
      equipo
    ];

    //Limpio los datos del formulario
    document.getElementById("nombreAJE").value = "";
    document.getElementById("apellidosAJE").value = "";
    document.getElementById("sEquiposAJE").selectedIndex = 0;

    //Envio de datos
    return datos;
  }

  // Render dialog for viewing players in a table
  renderVerJugadores(jugadores) {
    const container = document.getElementById("jugadoresPP");
    container.innerHTML = `
      <dialog id="dVerJugadores">
        <div style="display: flex; justify-content: flex-end;">
          <button id="XDeCierreVerJugadores">X</button>
        </div>
        <h3>Lista de Jugadores</h3>
        <table border="1" id="tablaJugadores">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Posición</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            ${jugadores.map(jugador => `
              <tr>
                <td>${jugador.nombre}</td>
                <td>${jugador.apellido}</td>
                <td>${jugador.posicion}</td>
                <td>${jugador.edad}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </dialog>
    `;

    const dialog = document.getElementById("dVerJugadores");
    const botonDeCierre = document.getElementById("XDeCierreVerJugadores");
    botonDeCierre.addEventListener("click", () => {
      dialog.close();
    });
  }

  // Render dialog for viewing teams in a table
  renderVerEquipos(equipos) {
    const container = document.getElementById("jugadoresPE");
    container.innerHTML = `
      <dialog id="dVerEquipos">
        <div style="display: flex; justify-content: flex-end;">
          <button id="XDeCierreVerEquipos">X</button>
        </div>
        <h3>Lista de Equipos</h3>
        <table border="1" id="tablaEquipos">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Ciudad</th>
              <th>Estadio</th>
            </tr>
          </thead>
          <tbody>
            ${equipos.map(equipo => `
              <tr>
                <td>${equipo.nombre}</td>
                <td>${equipo.ciudad}</td>
                <td>${equipo.estadio}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </dialog>
    `;

    const dialog = document.getElementById("dVerEquipos");
    const botonDeCierre = document.getElementById("XDeCierreVerEquipos");
    botonDeCierre.addEventListener("click", () => {
      dialog.close();
    });
  }
}
