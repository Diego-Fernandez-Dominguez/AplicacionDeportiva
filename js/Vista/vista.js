class Vista {
  constructor() {
    this.BAgregarJ = document.getElementById("BAgregarJ");
    this.BAgregarE = document.getElementById("BAgregarE");
    this.BAsignarJE = document.getElementById("BAsignarJE");
    this.BShowStats = document.getElementById("BShowStats");
  }

  //Mostrar las stats
  showstats(jugadoresPP, jugadoresPE) {
    //Limpiar lo que tenga dentro el html
    const contenedorP = document.getElementById("jugadoresPP");
    const contenedorE = document.getElementById("jugadoresPE");

    //Crear los elemementos de html

    //Tabla por posicion
    const tablaP = document.createElement("table");
    tablaP.style.border = 1;

    //Encabezado
    const theadP = document.createElement("thead");
    theadP.innerHTML = `
                <tr>
                    <td>Posicion</td>
                    <td>Jugadores</td>
                </tr>
            `;

    tablaP.appendChild(theadP);

    //Cuerpo
    const tbodyP = document.createElement("tbody");

    const posiciones = ["Porteros", "Defensas", "Delanteros", "Medio-Centros"];

    posiciones.forEach((posicion) => {
      const fila = document.createElement("tr");

      const columnaPos = document.createElement("td");
      columnaPos.textContent = posicion;

      const columnaCant = document.createElement("td");
      columnaCant.textContent = jugadoresPP[pos];

      fila.appendChild(columnaPos);
      fila.appendChild(columnaCant);
      tbodyP.appendChild(fila);
    });

    //Tabla por equipos
    const tablaE = document.createElement("table");
    tablaE.style.border = 1;

    //Encabezado
    const theadE = document.createElement("thead");
    theadE.innerHTML = `
            <tr>
                <td>Equipo</td>
                <td>Jugadores</td>
            </tr>
            `;

    tablaE.appendChild(theadE);

    //Cuerpo
    const tbodyE = document.createElement("tbody");

    //Divido el objeto en un par clave valor y hago forEach
    Object.entries(jugadoresPE).forEach(([equipo, jugadores]) => {
      const fila = document.createElement("tr");

      const columnaEq = document.createElement("td");
      columnaEq.textContent = equipo;

      const columnaCant = document.createElement("td");
      columnaCant.textContent = jugadores;

      fila.appendChild(columnaEq);
      fila.appendChild(columnaCant);
      tbodyE.appendChild(fila);
    });

    //Añado las tablas a los contenedores
    contenedorP.appendChild(tablaP);
    contenedorE.appendChild(tablaE);
  }

  //Pop-up de agregar el jugador
  renderAJugador() {
    const container = document.getElementById("cfAgregarJ");

    container.innerHTML = `
                <dialog id="fAgregarJugador">
                <button type = "button" id = "XDeCierre"></button>
                <h3>Agregar Jugador</h3>
                    <form id = "formulario" method="dialog">
                        <label>Nombre</label>
                        <input type="text" class="inputs" id="nombre" name="nombre" placeholder="Nombre" required><br><br>
                        <label>Apellidos</label>
                        <input type="text" class="inputs" id = "apellidos" name="apellidos" placeholder="Apellidos" required><br><br>
                        <label>Posicion</label>
                        <input type="text" class="inputs" id = "posicion" name="posicion" placeholder="Posición" required><br><br>
                        <label>Edad</label>
                        <input type="number" class="inputs" id = "edad" name="Edad" placeholder="Edad" required><br><br>
                        <button class="btsEnviar">Agregar Jugador</button>
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
    //Captura de datos y envio al controlador
    const formulario = document.getElementById("formulario");

    //Al envio del formulario, se recojen los datos, se envian al controlador y se cierra el pop-up
    formulario.addEventListener("submit", (evento) => {
      //Evito el cierre por defecto del pop-up
      evento.preventDefault();

      //Recojo datos
      const datos = {
        nombre: document.getElementById("nombre").value,
        apellidos: document.getElementById("apellidos").value,
        posicion: document.getElementById("posicion").value,
        edad: parseInt(document.getElementById("edad").value),
      };

      //Limpio los datos de los inputs
      document.getElementById("nombre").value = "";
      document.getElementById("apellidos").value = "";
      document.getElementById("posicion").value = "";
      document.getElementById("edad").value = "";

      //Envio datos al controlador
      return datos;
    });
  }

  //Pop-up de agregar el equipo
  renderAEquipo() {
    const container = getElementById("cfAgregarE");
    container.innerHTML = `
            <dialog id="fAgregarEquipo">
                <form method="dialog">
                <button type = "button" id = "XDeCierre"></button>
                <h3>Agregar Equipo</h3>
                <label>Nombre</label>
                <input type="text" class="inputs" name="nombre" placeholder="Nombre" required><br><br>
                <label>Ciudad</label>
                <input type="text" class="inputs" name="ciudad" placeholder="Ciudad" required><br><br>
                <label>Estadio</label>
                <input type="text" class="inputs" name="estadio" placeholder="Estadio" required><br><br>
                <button class="btsEnviar">Agregar Equipo</button>
                </form>
            </dialog>
            `;

    //Abrir el pop-up
    const dialog = getElementById("fAgregarEquipo");
    const bAbrir = getElementById("BAgregarE");
    bAbrir.addEventListener("click", () => {
      dialog.showModal();
    });

    //Cerrar el pop-up con la x
    const bCierre = getElementById("XDeCierre");
    bCierre.addEventListener("click", () => {
      dialog.close();
    });
  }

  //Captura de datos del equipo
  getDatosEquipo() {
    //Captura de datos y envio al controlador
    const formulario = document.getElementById("formulario");

    //Al envio del formulario, se recojen los datos, se envian al controlador y se cierra el pop-up
    formulario.addEventListener("submit", (evento) => {
      //Evito el cierre por defecto del pop-up
      evento.preventDefault();

      //Recojo datos
      const datos = {
        nombre : getElementById("nombre"),
        ciudad : getElementById("ciudad"),
        estadio : getElementById("estadio"),
      };

      //Limpio los datos de los inputs
      document.getElementById("nombre").value = "";
      document.getElementById("ciudad").value = "";
      document.getElementById("estadio").value = "";

      //Envio datos al controlador
      return datos;
    });
  }
}
