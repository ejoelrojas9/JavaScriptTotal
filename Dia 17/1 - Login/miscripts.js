contador = 0; //Contador para bloquear el boton de login despues de 3 intentos fallidos
function login() {
    let miUSer = document.getElementById('txtUser').value;
    let miPass = document.getElementById('txtPass').value;

    var userRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{9,}$/;
    var passRegex = /^[A-Za-z0-9]+$/g
    if(miUSer.match(userRegex) && miPass.match(passRegex)){
        if (contador == 3) {
            document.getElementById('btnLogin').disabled = true;
            alert("Has superado el numero de intentos permitidos");
            // Metodo en la API que bloquee el usuario
            return;
        }
        try {
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: miUSer,
                    password: miPass
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.exist == 1)
                    window.location.href = "home.html";
                else
                    contador++;
                    console.log("Bad login: " + contador);
            })
            .catch(error => { throw new Error("Error en la solicutud" + error)})
        } catch (error) {
            console.log(error);
        }
    } else {
        alert("Correo o password no cumplen con las condiciones");
    }
}

limitarCaracteres(document.getElementById('txtUser'), 20); //txtUser
limitarCaracteres(document.getElementById('txtPass'), 20); //txtPass

function limitarCaracteres(input, maxLenght) {
    document.addEventListener('input', function() {
        if (input.value.length > maxLenght) {
            input.value = input.value.slice(0, maxLenght);
        }
    });
}