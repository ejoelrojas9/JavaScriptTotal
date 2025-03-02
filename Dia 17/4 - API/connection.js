// npm init -y // Inicializar el proyecto
// npm install express // Instalar express
// npm install postgres // Instalar postgres (Opcional)
// npm install express pg // Instalar postgres
// node index.js // Ejecutar el servidor
// npm install cors // Para comunicar la pagina con la API, sino por defecto la API bloquea peticiones que vengan de un dominio ageno

// Configurar la conexión para nuestra base de datos en Mongo DB

const { Client } = require('pg');
// const client = new Client('postgres://postgres:qwer1234@localhost:5432/auth-javascript');
const connection = new Client({
	user: 'postgres',
	password: 'qwer1234',
	host: 'localhost',
	port: '5432',
	database: 'auth-javascript',
});

// Desarrollar una función para conectarnos con la base de datos y retornar el objecto que contiene la conexión
connection.connect(function(error) {
    if (error) throw error;
    console.log('Conectado a la base de datos');
});

// Exportar para otros modulos
module.exports = { connection };