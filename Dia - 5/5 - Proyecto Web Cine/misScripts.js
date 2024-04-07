

function selectGen(gen) {
  var age = document.getElementById("ageFile").value;
  var filmField = document.getElementById("film");
  var image = document.getElementById("pictureClass");

  if (age == "") {
    filmField.textContent = "Ingrese una edad valida";
  } else {
    switch (gen) {
    case "comedia":
      if (age < 13) {
        filmField.textContent = "Matilda";
        image.src = "image/matilda.jpeg";
      } else {
        if (age < 16) {
          filmField.textContent = "Si tuviera 30 ";
          image.src = "image/30.jpeg";
        } else {
          filmField.textContent = "Donde estan las rubias";
          image.src = "image/rubias.jpeg";
        }
      }
      break;
  
    case "drama":
      if (age < 13) {
        filmField.textContent = "No hay recomendación";
        image.src = "image/film.webp";
      } else {
        if (age < 16) {
          filmField.textContent = "Juno";
          image.src = "image/juno.jpeg";
        } else {
          filmField.textContent = "Viejos";
          image.src = "image/viejos.jpeg";
        }
      }
      break;

    case "infantil":
      if (age < 13) {
        filmField.textContent = "Encanto";
        image.src = "image/encanto.jpeg";
      } else {
        if (age < 16) {
          filmField.textContent = "Dragon Ball Broly";
          image.src = "image/broly.jpeg";
        } else {
          filmField.textContent = "Fullmetal Alchemist";
          image.src = "image/fullmetal.jpg";
        }
      }
      break;

    case "terror":
    if (age < 13) {
        filmField.textContent = "La leyenda de Sleepy Hollow";
        image.src = "image/sleepy.jpeg";
      } else {
        if (age < 16) {
          filmField.textContent = "Scream VI";
          image.src = "image/scream.jpeg";
        } else {
          filmField.textContent = "Sinister";
          image.src = "image/sinister.jpeg";
        }
      }
      break;
    }
  }
}