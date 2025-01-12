// npm init -y // Inicializar el proyecto
// npm install express // Instalar express
// npm install mysql // Instalar mysql
// node index.js // Ejecutar el servidor

// Configurar con eExpressJS el servidor de la app
const express = require('express');
const app = express();
app.set('port', 3000);
app.listen(3000);

// Llamar al componente de la base de datos mysql
var mysql = require('mysql');

// Extablecer los parametros de conexión
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'joelrojas',
    password: 'qwer1234',
    database: 'mibasenueva'
});

// Conectar a la base de datos
connection.connect();

// Agregar un nuevo registro a la tabla
connection.query('INSERT INTO Cliente VALUES (1, "Joel", 1, 3216667200, "Av Siempreviva 4269")', function (error, results) {
    if (error) throw error;
    console.log('Registro insertado con éxito!', results);
});

// Consultar la tabla
connection.query('SELECT * FROM Cliente', function (error, results) {
    if (error) throw error;
    console.log('Registros consultados con éxito!', results);
});

// Actualizar un registro de la tabla
connection.query('UPDATE Cliente SET nombre = "Joel Rojas", telefono = 3216677200 WHERE identificador = 1', function (error, results) {
    if (error) throw error;
    console.log('Registro actualizado con éxito!', results);
});

// Consultar la tabla
connection.query('SELECT * FROM Cliente', function (error, results) {
    if (error) throw error;
    console.log('Registros consultados con éxito!', results);
});

// Eliminar un registro de la tabla
connection.query('DELETE FROM Cliente WHERE identificador = 1', function (error, results) {
    if (error) throw error;
    console.log('Registro eliminado con éxito!', results);
});

// Cerrar conexión a la base de datos
connection.end();
