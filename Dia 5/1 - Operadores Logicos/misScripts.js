function calcular() {
  let elementAnswer1 = document.getElementById("answer1");
  let elementAnswer2 = document.getElementById("answer2");
  let elementAnswer3 = document.getElementById("answer3");

  let elementAge = document.getElementById("ageInput");
  let age = elementAge.value;

  let canDrink = age >= 18;
  elementAnswer1.textContent = canDrink;

  let canInParty = age >= 18 && age <= 30
  elementAnswer2.textContent = canInParty;

  let canInFree = age == 20 || age == 25
  elementAnswer3.textContent = canInFree;
}