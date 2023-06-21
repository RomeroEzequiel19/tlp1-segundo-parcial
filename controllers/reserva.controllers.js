const ctrlReservas = {};
const Reserva = require("../models/Reserva");

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrlReservas.obtenerReservas = async (req, res) => {
    try {
      const Reservas = await Reserva.findAll({
       
      });
  
      if (!Reservas || Reservas.length === 0) {
        throw {
          status: 404,
          message: "No hay Reservas registradas",
        };
      }
  
      return res.json(Reservas);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json(error.message || "Error interno del servidor");
    }
  };
// Obtener una reserva
// Crear una reserva
// Actualizar una reserva
// Eliminar una reserva de forma lógica

module.exports = ctrlReservas;