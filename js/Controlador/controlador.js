// /js/Controlador/controlador.js

// Datos en memoria (simulan modelos)
const equipos = [];
const jugadores = [];

document.addEventListener('DOMContentLoaded', () => {
  // Tablas
  const tablaEquipos = crearTabla('equipos', ['Nombre', 'Ciudad', 'Estadio']);
  const tablaJugadores = crearTabla('jugadores', ['Nombre', 'Apellidos', 'Equipo']);
  
  document.getElementById('jugadoresPE').appendChild(tablaEquipos);
  document.getElementById('jugadoresPP').appendChild(tablaJugadores);

  // Botones
  document.getElementById('BAgregarE').addEventListener('click', () => {
    document.getElementById('fAgregarEquipo').showModal();
  });

  document.getElementById('BAsignarJE').addEventListener('click', () => {
    document.getElementById('fAsignarJugadorEquipo').showModal();
  });

  // Formulario Equipo
  document.querySelector('#fAgregarEquipo form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const equipo = {
      nombre: form.nombre.value,
      ciudad: form.ciudad.value,
      estadio: form.estadio.value
    };
    
    equipos.push(equipo);
    agregarFila(tablaEquipos, [equipo.nombre, equipo.ciudad, equipo.estadio]);
    form.reset();
    e.target.closest('dialog').close();
  });

  // Formulario Jugador
  document.querySelector('#fAsignarJugadorEquipo form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const jugador = {
      nombre: form.nombreJugador.value,
      apellidos: form.apellidosJugador.value,
      equipo: form.nombreEquipo.value
    };
    
    jugadores.push(jugador);
    agregarFila(tablaJugadores, [jugador.nombre, jugador.apellidos, jugador.equipo]);
    form.reset();
    e.target.closest('dialog').close();
  });

  // Funciones auxiliares
  function crearTabla(id, headers) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    
    headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      tr.appendChild(th);
    });
    
    thead.appendChild(tr);
    table.appendChild(thead);
    table.appendChild(document.createElement('tbody'));
    return table;
  }

  function agregarFila(table, data) {
    const tbody = table.querySelector('tbody');
    const tr = document.createElement('tr');
    
    data.forEach(item => {
      const td = document.createElement('td');
      td.textContent = item;
      tr.appendChild(td);
    });
    
    tbody.appendChild(tr);
  }
});