const producto = require("../model/producto");

const ObtenerProductos = async (req, res, next) => {
  let productos;
  try {
    productos = await producto.find();
  } catch (error) {
    return next(error);
  }
  if (!productos) {
    return res.status(500).json({ message: "Error Interno del Servidor" });
  }
  res.json(productos); //convertidor
  return res.status(200);
};

const addProductos = async (req, res, next) => {
  const { nombre, precio, stock, categoria, fechaCrea, fechaAct } = req.body;

  if (
    !nombre &&
    nombre.trim() == "" &&
    !precio &&
    precio.trim() == "" &&
    !stock &&
    stock.trim() == ""
  ) {
    return res.status(422).json({ message: "Datos Ivalidos" });
  }

  let productos;
  try {
    productos = new producto({
      nombre,
      precio,
      stock,
      categoria,
    });

    productos = await productos.save();
  } catch (error) {
    return next(error);
  }
  if (!productos) {
    return res.status(500).json({ message: "Error Interno del Servidor" });
  }
  return res.status(201).json({ productos });
};

const updateProductos = async (req, res, next) => {
  const id = req.params.id;

  const { nombre, precio, stock, categoria, fechaAct } = req.body;

  if (
    !nombre &&
    nombre.trim() == "" &&
    !precio &&
    precio.trim() == "" &&
    !stock &&
    stock.trim() == ""
  ) {
    return res.status(422).json({ message: "Datos Ivalidos" });
  }

  let productos;
  try {
    productos = await producto.findByIdAndUpdate(id, {
      nombre,
      precio,
      stock,
      categoria,
      fechaAct: Date.now(),
    });

    console.log(productos);
  } catch (error) {
    return next(error);
  }
  if (!productos) {
    return res.status(500).json({ message: "Error Interno del Servidor" });
  }
  return res.status(200).json({ message: "Datos Actualizados Correctamente" });
};

//borrar

const deleteProductos = async (req, res, next) => {
  const id = req.params.id;
  let producto;

  try {
    producto = await producto.findByIdAndDelete(id);
  } catch (error) {
    return next(error);
  }
  if (!producto) {
    return res.status(500).json({ message: "No se pudo Borrar los Datos" });
  }
  return res.status(200).json({ message: "Datos Borrados Correctamente" });
};

exports.ObtenerProductos = ObtenerProductos;
exports.addProductos = addProductos;
exports.updateProductos = updateProductos;
exports.deleteProductos = deleteProductos;
