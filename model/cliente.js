const mongo = require("mongoose");

const clienteSchema = mongo.Schema({
  id: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
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

module.exports = mongo.model("cliente", clienteSchema);
