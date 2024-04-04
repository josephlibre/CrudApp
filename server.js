//console.log("Bienvenidosss!!");
const express = require("express");
const mongo = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:5000/",
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
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor esta corriendo en el puerto ${PORT}.`);
});

const ruta = require("./routes/categoriaRuta");
const ruta2 = require("./routes/detalleRuta");
const ruta3 = require("./routes/clienteRuta");
const ruta4 = require("./routes/productoRuta");
const ruta5 = require("./routes/facturaRuta");

app.use(express.json());
app.use("/categoria", ruta);
app.use("/cliente", ruta3);
app.use("/producto", ruta4);
app.use("/detalle", ruta2);

app.use("/factura", ruta5);

mongo
  .connect(
    "mongodb+srv://admin:nwqVYCL0WZNX59v4@cluster0.qihhlsg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Conexion exitosa de la BD en el puerto 5000")
    )
  )
  .catch((err) => console.log(err));
