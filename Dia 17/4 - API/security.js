// npm install crypto
// npm install bcrypt
const bcrypt = require('bcrypt');
const crypto = require('crypto');

// Función para hacer hash de la contraseña
function myHash(password) {
    const ciclos = 10;
    const salt = bcrypt.genSaltSync(ciclos);

    const passHash = bcrypt.hashSync(password, salt);
    return passHash;
}

// Función para encriptar datos
function myEncrypt(data) {
    const algoritmo = 'aes-128-gcm';
    const key = 'pass 16 caracter';
    const vi = crypto.randomBytes(16);

    const cifrado = crypto.createCipheriv(algoritmo, key, vi);
    
    let encriptar = cifrado.update(data, 'utf8', 'hex');

    encriptar += cifrado.final('hex');
    return encriptar;
}

module.exports = { myHash, myEncrypt };