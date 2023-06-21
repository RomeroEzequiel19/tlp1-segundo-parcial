// Imports
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

require('dotenv').config();

const port = process.env.PORT || 6000;

const app = express();

// Se importa la instancia de conexión a la base de datos 
const { sequelize } = require('./database');

sequelize.authenticate()
    .then(() => console.log('Conexión a base de datos exitosa'))
    .catch((error) => console.log('Error al conectar a base de datos', error));

require('ejs');


// Middlewares
// TODO: Implementar middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

app.use((req, res, next) => {
    res.write(`<div>
        <h1>La Ruta se encuentra</h1>
        <hr>
        <p>La pagina que intentas buscar no existe</p>
        <p>Se redireccionará a la página de inicio</p>
        <script>
        (
          () => setTimeout(() => {
            window.location.href='http://localhost:${port}/aeropuerto';
           }, 3000)           
        )();
        </script>
    </h1>`)
});

// Starting the server
app.listen(port, () => console.log(`Servidor correindo en http://localhost:${port}`));