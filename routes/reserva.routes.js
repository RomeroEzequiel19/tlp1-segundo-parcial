// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();


// ==========================================
//         Rutas para renderizar vistas
// ==========================================



// Obtener todas las reservas
router.get('/',(req,res)=>{
    res.render('index')
});
// Formulario para crear una reserva
router.get("/reservaa/crear", (req, res) => {
    res.render("reservas/crear_reserva");
  });
// Formulario para actualizar una reserva
router.get("/reserva/editar/:id", (req, res) => {
    res.render("reserva/editar_persona", { id: req.params.id });
  });
  
// ==========================================
//         Rutas para CRUD de reservas
// ==========================================


// Obtener todas las reservas
router.get("/api/reserva", obtenerReserva);

//Obtener una reserva
router.get("/api/reserva/:id", obtenerReserva);
 
// Crear una reserva
router.post("/api/reserva", crearReserva);
 
// Actualizar una reserva
router.put("/api/reservaa/:id", actualizarReserva);
 
// Eliminar una reserva de forma lógica
router.delete("/api/reserva/:id", eliminarReserva);

 
 module.exports = router;