const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const cliente = require("./cliente");
const detalleFactura = require("./detalleFactura");

const facturaSchema = new Schema({
  fechaCompra: {
    type: Date,
    required: true,
  },

  cliente: {
    type: Schema.Types.ObjectId,
    ref: cliente,
    required: true,
  },

  detalleFactura: {
    type: Schema.Types.ObjectId,
    ref: detalleFactura,
    required: true,
  },
});

module.exports = model("factura", facturaSchema);
