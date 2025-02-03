// Configurar la conexión para nuestra base de datos en Mongo DB

const {MongoClient} = require("mongodb");
const client = new MongoClient('mongodb://127.0.0.1:27017/mibase');

// Desarrollar una función para conectarnos con la base de datos y retornar el objecto que contiene la conexión
const conexionDB = () => {
    return client.connect()
    .then((dbClient) => {return dbClient})
    .catch((error) => {return error})
}

// Exportar para otros modulos
module.exports = {conexionDB}