const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    fecha: { type: Date, default: Date.now },
    total: { type: Number, required: true },
    estado: { type: String, enum: ['Pendiente','Pagado','En preparación','Entregado'], default: 'Pendiente' }
}, { timestamps: true });

module.exports = mongoose.model('Pedido', PedidoSchema);
