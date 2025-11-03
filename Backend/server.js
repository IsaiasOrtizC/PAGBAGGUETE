
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

if (!process.env.MONGO_URI) {
    console.error('❌ MONGO_URI no encontrada. Revisa tu archivo .env en Backend/');
    process.exit(1); 
}
console.log('✅ Variables de entorno cargadas correctamente');
console.log('MONGO_URI =', process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error('Error al conectar MongoDB:', err));

const usuariosRoutes = require('./Routes/usuarios');
const baguettesRoutes = require('./Routes/baguettes');

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/baguettes', baguettesRoutes);

app.get('/', (req, res) => {
    res.send('Backend funcionando correctamente');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
