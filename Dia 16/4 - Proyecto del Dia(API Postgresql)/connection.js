// Configurar la conexión para nuestra base de datos en Mongo DB

const { Client } = require('pg');
// const client = new Client('postgres://postgres:qwer1234@localhost:5432/university_data');
const connection = new Client({
	user: 'postgres',
	password: 'qwer1234',
	host: 'localhost',
	port: '5432',
	database: 'university_data',
});

// Desarrollar una función para conectarnos con la base de datos y retornar el objecto que contiene la conexión
connection.connect(function(error) {
    if (error) throw error;
    console.log('Conectado a la base de datos');
});

// Exportar para otros modulos
module.exports = { connection };