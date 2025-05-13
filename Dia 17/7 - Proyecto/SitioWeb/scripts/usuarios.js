function login() {
    let miEmail = document.getElementById("txtEmail").value;
    let miPass = document.getElementById("txtPass").value;

    var regex = /^[a-zA-Z0-9]+$/;

    if (!miPass.match(regex)) {
        
        alert("Correo o password no cumplen con las condiciones");
        return;
    }

    try {
        fetch('http://localhost:3000/usuarios/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: miEmail,
                pass: miPass
            })
        })
        .then(response => response.text())
        .then(data => {
            if(data === "") {
                alert("Login incorrecto");
            } else {
                // localStorage.removeItem("token");
                localStorage.setItem("token", data);
                window.location.href = "home.html";
            }
        })
        .catch(error => { throw new Error("Error en la solicitud" + error) });
    } catch (error) {
        console.error(error)
    }
}

function crear() {
    let miEmail = document.getElementById("txtEmail").value;
    let miPass = document.getElementById("txtPass").value;

    var contraseñaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(miPass.match(contraseñaRegex)) {
        try {
            fetch('http://localhost:3000/usuarios/create', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: miEmail,
                    pass: miPass
                })
            })
            .then(alert("Usuario creado"))
            .catch(error => { throw new Error("Error en la solicitud" + error) });
        } catch (error) {
        console.error('Error:', error);
        }
    } else {
        alert("La contraseña no cumple con los requisitos");
    }
}