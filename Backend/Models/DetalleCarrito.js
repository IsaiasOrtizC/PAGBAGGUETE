const mongoose = require('mongoose');

const DetalleCarritoSchema = new mongoose.Schema({
    idCarrito: { type: mongoose.Schema.Types.ObjectId, ref: 'Carrito', required: true },
    idBaguette: { type: mongoose.Schema.Types.ObjectId, ref: 'Baguette', required: true },
    cantidad: { type: Number, required: true },
    subtotal: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('DetalleCarrito', DetalleCarritoSchema);
