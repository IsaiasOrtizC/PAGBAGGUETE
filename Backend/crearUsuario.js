// Backend/crearUsuario.js
const mongoose = require('mongoose');
const Usuario = require('./Models/Usuario'); // Ajusta la ruta si tu modelo está en otra carpeta
require('dotenv').config({ path: './.env' });

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.error('Error al conectar MongoDB:', err));

// Crear un nuevo usuario
async function crearUsuario() {
    const usuario = new Usuario({
        nombre: 'Isaias',
        correo: 'isa@example.com',
        contraseña: '123456',
        rol: 'cliente'
    });

    try {
        const nuevoUsuario = await usuario.save();
        console.log('Usuario creado:', nuevoUsuario);
    } catch (err) {
        console.error('Error al crear usuario:', err);
    } finally {
        mongoose.disconnect();
    }
}

crearUsuario();
