function login() {
    let miUSer = document.getElementById('txtUser').value;
    let miPass = document.getElementById('txtPass').value;
    console.log(miUSer, miPass);

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
                console.log("Bad login");
        })
        .catch(error => { throw new Error("Error en la solicutud" + error)})
    } catch (error) {
        console.log(error);
    }
}