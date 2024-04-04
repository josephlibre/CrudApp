//const { default: mongoose } = require("mongoose");
const mongo = require("mongoose");

const detalleSchema = mongo.Schema({
  cantidad: {
    type: Number,
    required: true,
  },
  producto: {
    type: mongo.Schema.Types.ObjectId,
    ref: "producto",
    required: true,
  },

  precio: {
    type: Number,
    required: true,
  },
  fechaCrea: {
    type: Date,
    default: Date.now(),
  },

  fechaAct: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongo.model("detalleFactura", detalleSchema);
