const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const result = dotenv.config();


if (result.error) {
    console.error('❌ Error cargando .env:', result.error);
} else {
    console.log('✅ Variables de entorno cargadas:', result.parsed);
}
console.log('MONGO_URI =', process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.log('Error al conectar MongoDB:', err));

// Importar rutas
const usuariosRoutes = require('./Routes/usuarios');
const baguettesRoutes = require('./Routes/baguettes');

// Usar rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/baguettes', baguettesRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Backend funcionando correctamente');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
