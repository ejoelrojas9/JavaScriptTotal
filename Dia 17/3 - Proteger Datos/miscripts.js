function create() {
    // let userName = document.getElementById('txtName').value;
    // let userLastName = document.getElementById('txtLastName').value;
    let userEmail = document.getElementById('txtUser').value;
    let userPass = document.getElementById('txtPass').value;

    try {
        fetch('http://localhost:3000/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // firstName: userName,
                // lastName: userLastName,
                email: userEmail,
                password: userPass
            })
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => { throw new Error("Error en la solicutud" + error)})
    } catch (error) {
        console.log(error);
    }
}