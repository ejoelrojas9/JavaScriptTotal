function login() {
    let miUser = document.getElementById("txtUser").value;
    let miPass = document.getElementById("txtPass").value;

    try {
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: miUser,
                pass: miPass
            })
        })
        .then(response => response.text())
        .then(data => {
            if (data === "" || data === "undefined") {
                alert("Login incorrecto");
            } else {
                localStorage.setItem("token", data);
                window.location.href = "home.html";
            }
        })
        .catch(error => { throw new Error("Error en la solicitud" + error) });
    } catch (error) {
        alert("Error: " + error);
    }
}

function validate(name) {
    const token = localStorage.getItem("token");

    try {
        fetch("http://localhost:3000/validate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                permiso: name
            })
        })
        .then(response => response.text())
        .then(data => {
            if (data === "" || data === "undefined") {
                alert("No tiene permiso");
                
            } else {
                window.location.href = data;
            }
        })
        .catch(error => { throw new Error("Error en la solicitud" + error) });
    } catch (error) {
        alert("Error: " + error);
    }
}