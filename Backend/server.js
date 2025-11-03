// Backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// 🔹 Cargar variables de entorno desde Backend/.env
dotenv.config({ path: path.join(__dirname, '.env') });

// 🔹 Verificar carga del .env
if (!process.env.MONGO_URI) {
    console.error('❌ MONGO_URI no encontrada. Revisa tu archivo .env en Backend/');
    process.exit(1); // detiene el servidor si no hay URI
}
console.log('✅ Variables de entorno cargadas correctamente');
console.log('MONGO_URI =', process.env.MONGO_URI);

// 🔹 Inicializar Express
const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error('Error al conectar MongoDB:', err));

// 🔹 Importar rutas
const usuariosRoutes = require('./Routes/usuarios');
const baguettesRoutes = require('./Routes/baguettes');

// 🔹 Usar rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/baguettes', baguettesRoutes);

// 🔹 Ruta de prueba
app.get('/', (req, res) => {
    res.send('Backend funcionando correctamente');
});

// 🔹 Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
