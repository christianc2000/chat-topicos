const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: true,
        allowNull: false
    },
    celular: {
        type: String,
        allowNull: true,
        unique: true
    }
});

module.exports = model( 'Usuario', UsuarioSchema );