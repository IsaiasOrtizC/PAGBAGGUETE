const mongoose = require('mongoose');

const ReseñaSchema = new mongoose.Schema({
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    idBaguette: { type: mongoose.Schema.Types.ObjectId, ref: 'Baguette', required: true },
    puntuación: { type: Number, required: true, min: 1, max: 5 },
    comentario: { type: String },
    fecha: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Reseña', ReseñaSchema);
