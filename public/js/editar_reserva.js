// Referencia al formulario
const formEditar = document.querySelector("#formEditar");

// Funcion para obtener los datos de la tarea cuando se carga la página
document.addEventListener("DOMContentLoaded", async () => {
  
    const nombres = document.querySelector("#nombres");
    const apellidos = document.querySelector("#apellidos");
    const dni = document.querySelector("#dni");
    const telefono = document.querySelector("#telefono");
    const estado = document.querySelector("#estado");
    const cod_reserva = document.querySelector("#cod_reserva");
    const fecha_reserva = document.querySelector("#fecha_reserva");
  
  const response = await fetch(
    `http://localhost:3000/api/reserva/${formEditar.dataset.id}`
  );
  const data = await response.json();

  console.log(data);

  nombres.value = data.nombres;
  apellidos.value = data.apellidos;
  dni.value = data.dni;
  telefono.value = data.telefono
  estado.value = data.estado
  cod_reserva.value = data.cod_reserva
  fecha_reserva.value = data.fecha_reserva
});


