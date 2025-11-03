const mongoose = require('mongoose');

const DetallePedidoSchema = new mongoose.Schema({
    idPedido: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
    idBaguette: { type: mongoose.Schema.Types.ObjectId, ref: 'Baguette', required: true },
    cantidad: { type: Number, required: true },
    subtotal: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('DetallePedido', DetallePedidoSchema);
