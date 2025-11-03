const Usuario = require('../Models/Usuario');

const crearUsuario = async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        const usuarioGuardado = await nuevoUsuario.save();
        res.status(201).json(usuarioGuardado);
    } catch (err) {
        res.status(500).json(err);
    }
};

const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { crearUsuario, obtenerUsuarios };
