const mongo = require("mongoose");

const categoriaSchema = mongo.Schema({
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

module.exports = mongo.model("categoria", categoriaSchema);
