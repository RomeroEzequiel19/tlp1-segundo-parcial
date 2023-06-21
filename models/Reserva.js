// TODO: Crear modelo de datos de Reserva

const { sequelize, DataTypes } = require('../db');

const Reserva = sequelize.define('Reserva', {
    // Model attributes are defined here
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DNI: {
        type: DataTypes.INTEGER,
        defaultValue: false
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    cod_reserva: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_reserva: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    // Other model options go here
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'reserva'
});

// Crear tabla si no existe
Reserva.sync();

module.exports = Reserva;