const { Client } = require('pg');
const connection = new Client({
    user: 'postgres',
    password: 'qwer1234',
    host: 'localhost',
    port: '5432',
    database: 'viajes'
});
  
connection.connect(function(error) {
    if (error) throw error;
    console.log('Conectado a la base de datos');
});

module.exports = { connection };
