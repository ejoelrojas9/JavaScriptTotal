async function crearPost(titulo, contenido) {
    try {
        let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({   // JSON.stringify() => Convierte un objeto javascritp en una cadena json 
                title: titulo,
                body: contenido,
                userId: 1
            }),
        })

        if (!respuesta.ok) {
            throw new Error("Error en la solicitud: " + respuesta.statusText);
        }

        let data = await respuesta.json();
        console.log("Registro creado: ", data);

    } catch (error) {
        console.error('Algo salio mal al crear el registro');
    }
}

crearPost("Mi titulo de Ejemplo", "Mi contenido de ejemplo");