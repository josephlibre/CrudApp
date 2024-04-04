//console.log("Bienvenidosss!!");
const express = require("express");
const mongo = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3002/",
};

app.use(cors());
//app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la API." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Servidor esta corriendo en el puerto ${PORT}.`);
});

const ruta = require("./routes/categoriaRuta");

/*
const ruta2 = require("./routes/detalleRuta");
const ruta3 = require("./routes/clienteRuta");
const ruta4 = require("./routes/productoRuta");
const ruta5 = require("./routes/facturaRuta");
*/

app.use(express.json());

app.use("/categoria", ruta);

/*
app.use("/clientes", ruta3);
app.use("/productos", ruta4);
app.use("/detalles", ruta2);

app.use("/factura", ruta5);
*/
