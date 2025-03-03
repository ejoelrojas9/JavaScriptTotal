// npm install jsonwebtoken // Para instalar el modulo de JWT

const jwt = require('jsonwebtoken');
const secretKey = 'esta_es_una_clave_secreta';

function crearToken(idUser, email) {
    // Almacenar la información del usuario en un objeto
    const information = {
        user_id: idUser,
        email: email
    };

    // Generar el jwt
    const token = jwt.sign(information, secretKey, { expiresIn: '1h' });
    return token;
}

function validateToken(request, response, next) {
    // Obtener el token del header de autorización
    const token = request.headers.authorization.split(" ")[1];
    
    // Verificar y codificar el token
    try {
        const decoded = jwt.verify(token, secretKey);
        request.userData = decoded;
        next();
    } catch (error) {
        return response.status(401).send('Token de autoriación invalido');
    }
}

module.exports = { crearToken, validateToken };
