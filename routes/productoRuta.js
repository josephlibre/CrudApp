const express = require("express");
const {
  ObtenerProductos,
  addProductos,
  updateProductos,
  deleteProductos,
} = require("../controller/productoControlador");

const ruta = express.Router();

ruta.get("/", ObtenerProductos);
ruta.post("/", addProductos);
ruta.put("/:id", updateProductos);
ruta.delete("/:id", deleteProductos);

module.exports = ruta;
