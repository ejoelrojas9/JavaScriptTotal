// npm init -y
// npm install express
// npm install mongodb

// Importar el framework express
const express = require("express");
const app = express();

// Obtener el modulo conexion.js
const mongoDB = require("./conexion");

// Configurar nuestra API para que trabaje bajo el formato JSON
app.use(express.json());

// Definir un nuevo metodo GET
app.get("/clientes", (pedido, respuesta) => {
    // Obtener listado clientes
    mongoDB.conexionDB()
    .then((conexion) => {
        const controlador = conexion.db().collection("clientes");
        controlador.find().toArray()
        .then((filas) => respuesta.send(filas))
        .catch((error) => respuesta.send(error));
    })
})

// Definir el metodo POST
app.post("/clientes/create", (pedido, respuesta) => {
    mongoDB.conexionDB()
    .then((conexion) => {
        const controlador = conexion.db().collection("clientes");
        controlador.insertOne(pedido.body)
        .then(respuesta.send("Nuevo registro creado"))
        .catch((error) => respuesta.send(error));
    })
})

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log("El servidor esta en linea");
})