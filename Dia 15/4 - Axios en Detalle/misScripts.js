let datos = {
    title: 'Nuevo post',
    body: 'Mi contenido'
}

let miToken = 'este_es_mi_token';

axios.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${miToken}`;
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    (respuesta) => {
        respuesta.data.customField = "Nuevo Campo";
        return respuesta;
    }, (error) => {
        return Promise.reject(error)
    }
)



let pedido1 = axios.get('https://api.ejemplo.com/data1');
let pedido2 = axios.get('https://api.ejemplo.com/data2');
let pedido3 = axios.get('https://api.ejemplo.com/data3');


Promise.all([pedido1, pedido2, pedido3])
.then(([respuesta1, respuesta2, respuesta3]) => {
    //Codigo
})
.catch(error => {
    //manejar errores
})


// // Get request
// axios.get('https://jsonplaceholder.typicode.com/posts')
// .then(response => console.log(response.data))
// .catch(error => console.log(error))

// // POST request
// let data1 = {
//     title: 'Nuevo Post',
//     body: 'Mi contenido'
// }

// axios.post('https://jsonplaceholder.typicode.com/posts', data1)
// .then(response => console.log("El post fue creado con exito", response.data))
// .catch(error => console.log("Error al publicar", error))


// // Axios con HTTP request simultaneas
// let data2 = {
//     title: 'Nuevo Post',
//     body: 'Mi contenido'
// }

// let pedido1 = axios.get('https://api.ejemplo.com/data1')
// let pedido2 = axios.get('https://api.ejemplo.com/data2')
// let pedido3 = axios.get('https://api.ejemplo.com/data3')

// axios.all([pedido1, pedido2, pedido3])
// .then(axios.spread((response1, response2, response3) => {
//     // Codigo
// }))
// .catch(error => {
//     // Manejar errores
// })

// // Con Promise con HTTP request simultaneas
// let data3 = {
//     title: 'Nuevo Post',
//     body: 'Mi contenido'
// }

// let pedido4 = axios.get('https://api.ejemplo.com/data1')
// let pedido5 = axios.get('https://api.ejemplo.com/data2')
// let pedido6 = axios.get('https://api.ejemplo.com/data3')

// Promise.all([pedido4, pedido5, pedido6])
// .then(([response1, response2, response3]) => {
//     // Codigo
// })
// .catch(error => {
//     // Manejar errores
// })