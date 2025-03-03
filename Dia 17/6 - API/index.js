// Compare this snippet from Dia%2017/6%20-%20API/index.js:
// // npm init -y // Inicializar el proyecto
// // npm install express // Instalar express
// // npm install postgres // Instalar postgres (Opcional)
// // npm install express pg // Instalar postgres
// // npm install cors // Para comunicar la pagina con la API, sino por defecto la API bloquea peticiones que vengan de un dominio ageno
// // node index.js // Ejecutar el servidor

const express = require("express");
const cors = require('cors');
const app = express();

const myPostgres = require("./connection");
const security = require("./security");

app.use(cors());
app.use(express.json());

app.post("/login", (request, response) => {
    let email = request.body.email;
    let pass = request.body.pass;
    console.log(email, pass);
    myPostgres.connection.query(
        'SELECT id FROM users WHERE email = $1 AND password = $2 ', [email, pass],
        (error, results) => {
        if(error) throw error;
        if(results.rows.length === 0) {
            response.send('undefined');
        } else {
            response.send(security.crearToken(results.rows[0].id, request.body.email));
        }
    });
})

app.post("/validate", security.validateToken, (request, response) => {
    console.log(request.userData.user_id);
    console.log(request.body.permiso);
    myPostgres.connection.query(
        'SELECT p.page FROM permisos p JOIN permisosxusuario u ON u.permiso_id = p.id WHERE u.usuario_id = $1 AND p.name = $2',
        [request.userData.user_id, request.body.permiso],
        (error, results) => {
            console.log(results.rows);
        if(error) throw error;
        if (results.rows.length === 0) {
            response.send('undefined');
        } else {
            response.send(results.rows[0].page);
        }
    });
})

app.listen(3000, () => {    
    console.log("El servidor esta en linea");
})
