let user = 'Joel';
let password = 'javascriptTotal';
let token = 'miToken';

// Manejo de Redirecciones

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET',
  credentials: 'include',
  cache: 'only-if-cached',
  // redirect:  'follow',    // Con esta opcion el navegador va seguir automaticamente todas las redirecciones que reciba hasta que obtenga una respuesta que no sea una redirecciones
  // redirect:  'error',   // Con esta opcion la promesa fecth va ha rechazar con un tipo de error de tipo type error apenas el navegador encuentre una respuesta de redireccion y no sigue ninguna redireccion
  redirect:  'manual',    // Con esta opcion la promesa fetch no sigue automaticamente las redirecciones como lo haría con follow ni las rechaza como con error se recibe que tipo re redirecciones se pueden seguir
  headers: {
    'Authorization': 'Bearer' + token,    // Es una función de javscript que transforma un string en un formato llamado Basic64
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (response.type === 'opaqueredirect') {
      let nuevaUbicacion = response.headers.get('Location');
      console.log("Redirigiendo a : ", nuevaUbicacion);
    } else {
      return response.json()
    }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));


// // Si se quiere que la solicitud busque primero en el cache de la maquina
// // antes de acudir al servidor para pedir información o no

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'GET',
//   credentials: 'include',
//   // cache: 'default',      // Con default hace los request según lo indica el server
//   // cache: 'no-cache',     // Hace los request con el pedido del server
//   // cache: 'no-strore',    // En este caso la pagina no va almacenar la información que reciba en el cache
//   // cache: 'reload',       // Forza al navegador a descargar el recurso que ha buscando en el server incluso si ya existe una copia valida
//   // cache: 'force-cache',  // Hace que el navegador utilice siempre la copia que esta en el cache a menos que no haya nada en cache
//   cache: 'only-if-cached', // El navegador va utilizar la copia que se encuentre en cache de recursos si esta disponible
//   headers: {
//     'Authorization': 'Bearer' + token,   // La autenticación Beare funciona con tokens
//     'Content-Type': 'application/json'
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


// // Bearer Authentication

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'GET',
//   credentials: 'include',
//   headers: {
//     'Authorization': 'Bearer' + token,   // La autenticación Beare funciona con tokens
//     'Content-Type': 'application/json'
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// // Basic Authentication

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'GET',
//   credentials: 'include',
//   headers: {
//     'Authorization': 'Basic' + btoa(user + ':' + password),    // Es una función de javscript que transforma un string en un formato llamado Basic64
//     'Content-Type': 'application/json'
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
