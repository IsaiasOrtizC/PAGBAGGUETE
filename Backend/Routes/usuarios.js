const router = require('express').Router();
const { crearUsuario, obtenerUsuarios } = require('../Controllers/usuarios');

router.post('/', crearUsuario);   // Crear usuario
router.get('/', obtenerUsuarios); // Listar usuarios

module.exports = router;

