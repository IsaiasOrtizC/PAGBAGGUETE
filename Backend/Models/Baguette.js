const mongoose = require('mongoose');

const BaguetteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    precio: { type: Number, required: true },
    disponibilidad: { type: Boolean, default: true },
    descripcion: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Baguette', BaguetteSchema);
