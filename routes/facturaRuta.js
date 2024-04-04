const express = require("express");
const {
  obtenerFactura,
  addFactura,
  updateFactura,
  deleteFactura,
} = require("../controller/facturaControlador");

const ruta = express.Router();

ruta.get("/", obtenerFactura);
ruta.post("/", addFactura);
ruta.put("/:id", updateFactura);
ruta.delete("/:id", deleteFactura);

module.exports = ruta;
