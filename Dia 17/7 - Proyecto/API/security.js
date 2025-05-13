// npm install jsonwebtoken // Para instalar el modulo de JWT
// npm install crypto
// npm install bcrypt

// HASING
const bcrypt = require('bcrypt');
const ciclos = 10;
const salt = bcrypt.genSaltSync(ciclos);

// ENCRIPTACION
const crypto = require('crypto');
const algorithm = 'aes-128-gcm';
const password = 'pass 16 caracter';
const iv = crypto.randomBytes(16);

// TOKEN
const jwt = require('jsonwebtoken'); 
const secretKey = 'esta_es_una_clave_secreta';

function miHash(password) {
    // Hascer hashing de la contraseña con el salt generado
    const claveConHash = bcrypt.hashSync(password, salt);

    return claveConHash;
}

function miEncriptado(data) {
    // Crear un objeto de cifrado
    const cifrado = crypto.createCipheriv(algorithm, password, iv);

    // Cifrar el texto plano
    let encriptado = cifrado.update(data, 'utf8', 'hex');
    encriptado += cifrado.final('hex');

    return encriptado;
}

function createToken(idUser, email) {
    // Almacenar la información del usuario en un objeto
    const info = {
        user_id: idUser,
        email: email
    };

    // Generar el jwt
    const token = jwt.sign(info, secretKey, { expiresIn: '1h' });
    return token;
}

function validateToken(request, response, next) {
    // Obtener el token del header de autorización
    const token = request.headers.authorization.split(' ')[1];
    
    // Verificar y codificar el token
    try {
        const decoded = jwt.verify(token, secretKey);
        request.userData = decoded;
        next();
    } catch (error) {
        return response.status(401).send('Token de autoriación invalido');
    }
}

module.exports = { createToken, miEncriptado, validateToken, miHash };
