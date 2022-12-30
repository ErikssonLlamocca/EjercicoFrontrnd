const mongoose = require('mongoose');

const usuariosSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  usuario: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  favoritos: {
    type: Array,
    required: true,
  },
});
module.exports = mongoose.model('usuarios',usuariosSchema);