const mongoose = require('mongoose');

const PromociónSchema = new mongoose.Schema({
    título: { type: String, required: true },
    descripcion: { type: String },
    descuento: { type: Number, required: true }, // porcentaje
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date, required: true },
    baguettes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Baguette' }] // Relación N a N
}, { timestamps: true });

module.exports = mongoose.model('Promoción', PromociónSchema);
