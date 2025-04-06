class Vista {
    constructor(){
        this.BAgregarJ = document.getElementById("BAgregarJ");
        this.BAgregarE = document.getElementById("BAgregarE");
        this.BAsignarJE = document.getElementById("BAsignarJE");
        this.BShowStats = document.getElementById("BShowStats");
    }

        //Mostrar las stats
        showstats(jugadoresPP, jugadoresPE){
            //Limpiar lo que tenga dentro el html
            const contenedorP = document.getElementById("jugadoresPP");
            const contenedorE = document.getElementById("jugadoresPE");


            //Crear los elemementos de html

            //Tabla por posicion
            const tablaP = document.createElement("table");
            tablaP.style.border = 1;

            //Encabezado
            const theadP = document.createElement("thead");
            theadP.innerHTML =`
                <tr>
                    <td>Posicion</td>
                    <td>Jugadores</td>
                </tr>
            `;

            tablaP.appendChild(theadP);

            //Cuerpo
            const tbodyP = document.createElement("tbody");

            const posiciones = ["Porteros", "Defensas", "Delanteros", "Medio-Centros"]

            posiciones.forEach(posicion =>{
                const fila = document.createElement("tr");

                const columnaPos = document.createElement("td");
                columnaPos.textContent = posicion;

                const columnaCant = document.createElement("td");
                columnaCant.textContent = jugadoresPP[pos];

                fila.appendChild(columnaPos);
                fila.appendChild(columnaCant);
                tbodyP.appendChild(fila);
            })

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
            Object.entries(jugadoresPE).forEach(([equipo, jugadores]) =>{
                const fila = document.createElement("tr");

                const columnaEq = document.createElement("td");
                columnaEq.textContent = equipo;

                const columnaCant = document.createElement("td");
                columnaCant.textContent = jugadores;

                fila.appendChild(columnaEq);
                fila.appendChild(columnaCant);
                tbodyE.appendChild(fila);
            })
            
            //Añado las tablas a los contenedores
            contenedorP.appendChild(tablaP);
            contenedorE.appendChild(tablaE);
        }


}