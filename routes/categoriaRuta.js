const express = require("express");
const {
  ObtenerCategoria,
  addCategoria,
  updateCategoria,
  deleteCategoria,
} = require("../controller/categoriaControlador");

const ruta = express.Router();

ruta.get("/", ObtenerCategoria);
ruta.post("/", addCategoria);
ruta.put("/:id", updateCategoria);
ruta.delete("/:id", deleteCategoria);

module.exports = ruta;
