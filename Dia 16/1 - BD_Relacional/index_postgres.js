// npm init -y // Inicializar el proyecto
// npm install express // Instalar express
// npm install postgres // Instalar postgres
// node index.js // Ejecutar el servidor

// Configurar con ExpressJS el servidor de la app
const express = require('express');
const app = express();
app.set('port', 3000);
app.listen(3000);

// Llamar al componente de la base de datos postgresql
var pg = require('pg');
var conString = "postgres://postgres:qwer1234@localhost:5432/mibasenueva";

// // Extablecer los parametros de conexión
var client = new pg.Client(conString);
client.connect();

// // Agregar un nuevo registro a la tabla
// client.query('INSERT INTO cliente (identificador, nombre, genero, telefono, domicilio) VALUES ($1, $2, $3, $4, $5)', [5, 'Francisco Sosa', 1, 321666700, 'Av Siempreviva 4269'], function (error, results) {
//     if (error) throw error;
//     console.log('Registro insertado con éxito!', results);
// });

// Consultar la tabla
client.query('SELECT * FROM cliente', function (error, results) {
    if (error) throw error;
    console.log('Registros consultados con éxito!', results);
});

// Actualizar un registro de la tabla
client.query('UPDATE cliente SET nombre = $1, telefono = $2 WHERE identificador = 1', ['Joel Rojas', 3206187390], function (error, results) {
        if (error) throw error;
        console.log('Registro actualizado con éxito!', results);
    });
    
// client.query('UPDATE cliente SET nombre = $1, telefono = $2 WHERE identificador = $3', ['Joel Rojas', 3216667200, 1], function (error, results) {
//     if (error) throw error;
//     console.log('Registro actualizado con éxito!', results);
// });

// Consultar la tabla
client.query('SELECT * FROM cliente', function (error, results) {
    if (error) throw error;
    console.log('Registros consultados con éxito!', results);
});

// // Eliminar un registro de la tabla
// client.query('DELETE FROM cliente WHERE identificador = $1', [5], function (error, results) {
//     if (error) throw error;
//     console.log('Registro eliminado con éxito!', results);
// });

// Cerrar conexión a la base de datos
// client.close();
