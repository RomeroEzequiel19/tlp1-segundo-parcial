const formNuevaReserva = document.querySelector("#formNuevaReserva");

formNuevaReserva.addEventListener("submit", async (e) => {
  e.preventDefault();
  // Se obtienen los valores de cada input
  const nombres = document.querySelector("#nombres").value;
  const apellidos = document.querySelector("#apellidos").value;
  const dni = document.querySelector("#dni").value;
  const telefono = document.querySelector("#telefono").value;
  const estado = document.querySelector("#estado").value;
  const cod_reserva = document.querySelector("#cod_reserva").value;
  const fecha_reserva = document.querySelector("#fecha_reserva").value;

  // Se crea un objeto con los valores de los inputs
  const nuevaReserva = {
    nombres,
    apellidos,
    dni,
    telefono,
    estado,
    cod_reserva,
    fecha_reserva,
  };

  // Se envia la peticion POST
  try {
    const res = await fetch("http://localhost:3000/api/reserva", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaReserva),
    });

    if (res.status === 400) {
      throw {
        status: 400,
        message: "Todos los campos son obligatorios",
      };
    }

    if (res.status === 500) {
      throw {
        status: 500,
        message: "Error en el servidor",
      };
    }

    const data = await res.json();
    console.log({ data });
    formNuevaReserva.reset();
    window.location.href = "/";
  } catch (error) {
    console.log(error);
  }
});
