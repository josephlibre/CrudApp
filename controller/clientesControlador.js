const cliente = require("../model/cliente");

const Obtenerclientes = async (req, res, next) => {
  let clientes;
  try {
    clientes = await cliente.find();
  } catch (error) {
    return next(error);
  }
  if (!clientes) {
    return res.status(500).json({ message: "Error Interno del Servidor" });
  }
  res.json(clientes);
  return res.status(200);
};

const addclientes = async (req, res, next) => {
  const { id, nombre } = req.body;

  if (!id && id.trim() == "" && !nombre && nombre.trim() == "") {
    return res.status(422).json({ message: "Datos Ivalidos" });
  }

  let clientes;
  try {
    clientes = new cliente({
      id,
      nombre,
    });

    clientes = await clientes.save();
  } catch (error) {
    return next(error);
  }
  if (!clientes) {
    return res.status(500).json({ message: "Error Interno del Servidor" });
  }
  return res.status(201).json({ clientes });
};

const updateclientes = async (req, res, next) => {
  const id = req.params.id;

  const { nombre, fechaAct } = req.body;

  if (!nombre && nombre.trim() == "") {
    return res.status(422).json({ message: "Datos Ivalidos" });
  }

  let clientes;
  try {
    clientes = await cliente.findByIdAndUpdate(id, {
      nombre,
      fechaAct: Date.now(),
    });

    console.log(clientes);
  } catch (error) {
    return next(error);
  }
  if (!clientes) {
    return res.status(500).json({ message: "Error Interno del Servidor" });
  }
  return res.status(200).json({ message: "Datos Actualizados Correctamente" });
};

//borrar

const deleteclientes = async (req, res, next) => {
  const id = req.params.id;
  let clientes;

  try {
    clientes = await cliente.findByIdAndDelete(id);
  } catch (error) {
    return next(error);
  }
  if (!clientes) {
    return res.status(500).json({ message: "No se pudo Borrar los Datos" });
  }
  return res.status(200).json({ message: "Datos Borrados Correctamente" });
};

exports.Obtenerclientes = Obtenerclientes;
exports.addclientes = addclientes;
exports.updateclientes = updateclientes;
exports.deleteclientes = deleteclientes;
