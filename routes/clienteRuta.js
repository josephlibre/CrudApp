const express = require("express");
const {
  Obtenerclientes,
  addclientes,
  updateclientes,
  deleteclientes,
} = require("../controller/clientesControlador");

const ruta = express.Router();

ruta.get("/", Obtenerclientes);
ruta.post("/", addclientes);
ruta.put("/:id", updateclientes);
ruta.delete("/:id", deleteclientes);

module.exports = ruta;
