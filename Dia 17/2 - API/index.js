// npm init -y // Inicializar el proyecto
// npm install express // Instalar express
// npm install postgres // Instalar postgres (Opcional)
// npm install express pg // Instalar postgres
// node index.js // Ejecutar el servidor
// npm install cors // Para comunicar la pagina con la API, sino por defecto la API bloquea peticiones que vengan de un dominio ageno

const express = require("express");
const cors = require('cors');
const app = express();

const myPostgres = require("./connection");

app.use(cors());
app.use(express.json());

app.post("/login", (request, response) => {
    console.log(request.body);
    const email = request.body.email;
    const password = request.body.password
    myPostgres.connection.query('SELECT COUNT(*) AS exist FROM users WHERE email = $1 AND password = $2', [email, password], function(error, results) {
        if (error) throw error;
        response.send(results.rows[0]);
    });
})

app.listen(3000, () => {    
    console.log("El servidor esta en linea");
})