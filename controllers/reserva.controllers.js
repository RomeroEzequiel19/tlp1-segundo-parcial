const ctrlReservas = {};
const Reserva = require("../models/Reserva");

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrlReservas.obtenerReservas = async (req, res) => {
    try {
      const Reservas = await Reserva.findAll({
            where: {
              estado: 1,
            },
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
ctrlReservas.obtenerReserva = async (req, res) => {
    const { id } = req.params;
  
    try {
      const Reservas = await Reserva.findOne({
        where: {
          id:id
        },
      });
  
      if (!Personas) {
        throw {
          status: 404,
          message: "No existe la Personas",
        };
      }
  
      return res.json(Reservas);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json(error.message || "Error interno del servidor");
    }
  };
  
// Crear una reserva
ctrlReservas.crearReserva = async (req, res) => {
    const {
        nombres,
        apellidos,
        dni,
        telefono,
        estado,
        cod_reserva,
        fecha_reserva
    } = req.body;
  
    try {
      const reservas = await Reserva.create({
        nombres,
        apellidos,
        dni,
        telefono,
        estado,
        cod_reserva,
        fecha_reserva
      });
  
      if (!reservas) {
        throw {
          status: 400,
          message: "No se pudo crear la Persona",
        };
      }
  
      return res.json(reservas);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json(error.message || "Error interno del servidor");
    }
  };
  
// Actualizar una reserva
// Eliminar una reserva de forma lógica

ctrlReservas.eliminarReserva = async (req, res) => {
    const { id } = req.params;
  
    try {
      const reservaEliminada = await Reserva.update(
        {
          estado: 2,
        },
        {
          where: {
            id: id,
           
          },
        }
      );
  
      if (!reservaEliminada) {
        throw {
          status: 400,
          message: "No se pudo eliminar la reserva",
        };
      }
  
      return res.json({
        reservaEliminada,
        message: "Reserva eliminada correctamente",
      });
    } catch (error) {
      return res
        .status(error.status || 500)
        .json(error.message || "Error interno del servidor");
    }
  };

module.exports = ctrlReservas;