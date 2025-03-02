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
const security = require("./security");

app.use(cors());
app.use(express.json());

app.post("/create", (request, response) => {
    let userEncrip = security.myEncrypt(request.body.email);
    let passEncrip = security.myHash(request.body.password);
    myPostgres.connection.query('SELECT COUNT(*) AS id FROM users', function(error, results) {
        if (error) {
            console.error(error);
            return response.status(500).send('Error al obtener el id');
        }
        let userId = Number(results.rows[0].id) + 1;

        myPostgres.connection.query(
            'INSERT INTO users (id, email, password) VALUES ($1, $2, $3) RETURNING *',
            [userId, userEncrip, passEncrip],
            (error, results) => {
            if(error) {
                console.error(error);
                return response.status(500).send('Error al crear el usuario');
            }
            console.log('Usuario creado');
            response.send('Usuario creado correctamente');
        })
    });    
})

app.listen(3000, () => {    
    console.log("El servidor esta en linea");
})
