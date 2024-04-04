const categoria = require("../model/categoria");

const ObtenerCategoria = async (req, res, next) => {
  let categorias;
  try {
    categorias = await categoria.find();
  } catch (error) {
    return next(error);
  }
  if (!categorias) {
    return res.status(500).json({ message: "Error Interno del Servidor" });
  }
  res.json(categorias); //convertidor
  return res.status(200);
};

const addCategoria = async (req, res, next) => {
  const { nombre, fechaCrea, fechaAct } = req.body;

  if (!nombre && nombre.trim() == "" && !fechaCrea && fechaCrea.trim() == "") {
    return res.status(422).json({ message: "Datos Ivalidos" });
  }

  let categorias;
  try {
    categorias = new categoria({
      nombre,
    });

    categorias = await categorias.save();
  } catch (error) {
    return next(error);
  }
  if (!categorias) {
    return res.status(500).json({ message: "Error Interno del Servidor" });
  }
  return res.status(201).json({ categorias });
};

const updateCategoria = async (req, res, next) => {
  const id = req.params.id;

  const { nombre } = req.body;

  if (!nombre && nombre.trim() == "") {
    return res.status(422).json({ message: "Datos Ivalidos" });
  }

  let categorias;
  try {
    categorias = await categoria.findByIdAndUpdate(id, {
      nombre,

      fechaAct: Date.now(),
    });

    console.log(categorias);
  } catch (error) {
    return next(error);
  }
  if (!categorias) {
    return res.status(500).json({ message: "Error Interno del Servidor" });
  }
  return res.status(200).json({ message: "Datos Actualizados Correctamente" });
};

//borrar

const deleteCategoria = async (req, res, next) => {
  const id = req.params.id;
  let categorias;

  try {
    categorias = await categoria.findByIdAndDelete(id);
  } catch (error) {
    return next(error);
  }
  if (!categorias) {
    return res.status(500).json({ message: "No se pudo Borrar los Datos" });
  }
  return res.status(200).json({ message: "Datos Borrados Correctamente" });
};

exports.ObtenerCategoria = ObtenerCategoria;
exports.addCategoria = addCategoria;
exports.updateCategoria = updateCategoria;
exports.deleteCategoria = deleteCategoria;
