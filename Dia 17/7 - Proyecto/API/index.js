const express = require("express");
const cors = require("cors");
const app = express();

const myPostgres = require("./connection");
const security = require("./security");

app.use(cors());
app.use(express.json());

app.post("/usuarios/login", (request, response) => {
    let email = request.body.email;
    let pass = request.body.pass;
    myPostgres.connection.query(
        'SELECT id FROM usuarios WHERE (administrador = 0 AND email = $1 AND pass = $2) OR (administrador = 1 AND email = $1 AND pass = $2)',
        [email, pass],
        function(error, results) {
        if (error) throw error;
        if(results.rows.length === 0) {
            response.send(undefined);
        }
        else {
            response.send(security.createToken(results.rows[0].id, email));
        }
    });
})

app.post("/usuarios/create", (request, response) => {
    let email = request.body.email;
    let pass = request.body.pass;
    myPostgres.connection.query('INSERT INTO usuarios (email, pass, administrador) VALUES ($1, $2, 0) RETURNING id',
        [email, pass],
        function(error, results) {
        if (error) throw error;
        myPostgres.connection.query('INSERT INTO permisosxusuario (usuario_id, permiso_id) VALUES ($1, 2)', [results.rows[0]['id']], 
            function(error, results) {
            if (error) throw error;
            response.send(true);
        });
    });
})

app.get("/ofertas", (request, response) => {    
    myPostgres.connection.query('SELECT * FROM ofertas', function(error, results) {
        if (error) throw error;
        response.send(results);
    });
})

app.post('/validate', security.validateToken, (request, response) => {
     myPostgres.connection.query(
        'SELECT p.pagina FROM permisos p JOIN permisosxusuario u ON u.permiso_id = p.id WHERE u.usuario_id = $1 AND p.nombre = $2',
        [request.userData.user_id, request.body.permiso],
        function(error, results) {
        if (error) throw error;
        if(results.rows.length === 0) {
            response.send(undefined);
        }
        else {
            response.send(results.rows[0]['pagina']);
        }
    });
})

app.listen(3000, () => {
    console.log("El servidor esta en línea")
})