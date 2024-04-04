const detalle = require("../model/detalleFactura");

const ObtenerDetalle = async (req, res, next) => {
  let detalles;
  try {
    detalles = await detalle.find();
  } catch (error) {
    return next(error);
  }
  if (!detalles) {
    return res.status(500).json({ message: "Error Interno del Servidor" });
  }
  res.json(detalles); //convertidor
  return res.status(200);
};

const addDetalle = async (req, res, next) => {
  const { cantidad, producto, fechaCrea, fechaAct } = req.body;

  if (!nombre && nombre.trim() == "" && !producto && producto.trim() == "") {
    return res.status(422).json({ message: "Datos Ivalidos" });
  }

  let detalles;
  try {
    detalles = new detalle({
      nombre,
      producto,
    });

    detalles = await detalles.save();
  } catch (error) {
    return next(error);
  }
  if (!detalles) {
    return res.status(500).json({ message: "Error Interno del Servidor" });
  }
  return res.status(201).json({ detalles });
};

const updateDetalle = async (req, res, next) => {
  const id = req.params.id;

  const { nombre, producto, fechaAct } = req.body;

  if (!nombre && nombre.trim() == "" && !producto && producto.trim() == "") {
    return res.status(422).json({ message: "Datos Ivalidos" });
  }

  let detalles;
  try {
    detalles = await detalle.findByIdAndUpdate(id, {
      nombre,
      producto,
      fechaAct: Date.now(),
    });

    console.log(detalles);
  } catch (error) {
    return next(error);
  }
  if (!detalles) {
    return res.status(500).json({ message: "Error Interno del Servidor" });
  }
  return res.status(200).json({ message: "Datos Actualizados Correctamente" });
};

//borrar

const deleteDetalle = async (req, res, next) => {
  const id = req.params.id;
  let detalles;

  try {
    detalles = await detalle.findByIdAndDelete(id);
  } catch (error) {
    return next(error);
  }
  if (!detalles) {
    return res.status(500).json({ message: "No se pudo Borrar los Datos" });
  }
  return res.status(200).json({ message: "Datos Borrados Correctamente" });
};

exports.ObtenerDetalle = ObtenerDetalle;
exports.addDetalle = addDetalle;
exports.updateDetalle = updateDetalle;
exports.deleteDetalle = deleteDetalle;
