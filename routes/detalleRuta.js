const express = require("express");
const {
  ObtenerDetalle,
  addDetalle,
  updateDetalle,
  deleteDetalle,
} = require("../controller/detalleControlador");

const ruta = express.Router();

ruta.get("/", ObtenerDetalle);
ruta.post("/", addDetalle);
ruta.put("/:id", updateDetalle);
ruta.delete("/:id", deleteDetalle);

module.exports = ruta;
