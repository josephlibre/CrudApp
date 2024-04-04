const mongo = require("mongoose");
const categoria = require("./categoria");

const productoSchema = mongo.Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  categoria: {
    type: mongo.Schema.Types.ObjectId,
    ref: categoria,
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

module.exports = mongo.model("producto", productoSchema);
