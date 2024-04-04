const factura = require("../model/factura");
const facturaCliente = require("../model/cliente");

const obtenerFactura = async (req, res, next) => {
  let facturas;

  try {
    facturas = await factura.find();
  } catch (error) {
    return next(error);
  }
  if (!facturas) {
    return res.status(500).json({ message: "Error Interno del Servidor" });
  }
  res.json(facturas);
  return res.status(200);
};

const addFactura = async (req, res, next) => {
  const { fechaCompra, cliente, detalleFactura } = req.body;

  const clienteFacura = await inventarioUsuarios.findById(req.body.cliente);
  if (!clienteFacura)
    return res.status(400).json({ message: "Usuario a Cargo Invalido" });

  if (
    !cliente &&
    cliente.trim() == "" &&
    !detalleFactura &&
    detalleFactura.trim() == ""
  ) {
    return res.status(422).json({ message: "Datos Ivalidos" });
  }

  let facturas;
  try {
    facturas = new factura({
      fechaCompra,
      cliente,
      detalleFactura,
    });

    facturas = await facturas.save();
  } catch (error) {
    return next(error);
  }
  if (!facturas) {
    return res.status(500).json({ message: "Error Interno del Servidor" });
  }
  return res.status(201).json({ facturas });
};

const updateFactura = async (req, res, next) => {
  const id = req.params.id;

  const { fechaCompra, cliente, detalleFactura } = req.body;

  if (
    !cliente &&
    cliente.trim() == "" &&
    !detalleFactura &&
    detalleFactura.trim() == ""
  ) {
    return res.status(422).json({ message: "Datos Ivalidos" });
  }

  let facturas;
  try {
    facturas = await factura.findByIdAndUpdate(id, {
      fechaCompra,
      cliente,
      detalleFactura,
    });

    console.log(facturas);
  } catch (error) {
    return next(error);
  }
  if (!facturas) {
    return res.status(500).json({ message: "Error Interno del Servidor" });
  }
  return res.status(200).json({ message: "Datos Actualizados Correctamente" });
};

//borrar

const deleteFactura = async (req, res, next) => {
  const id = req.params.id;
  let facturas;

  try {
    facturas = await factura.findByIdAndDelete(id);
  } catch (error) {
    return next(error);
  }
  if (!facturas) {
    return res.status(500).json({ message: "No se pudo Borrar los Datos" });
  }
  return res.status(200).json({ message: "Datos Borrados Correctamente" });
};

exports.obtenerFactura = obtenerFactura;
exports.addFactura = addFactura;
exports.updateFactura = updateFactura;
exports.deleteFactura = deleteFactura;
