function resOperacion() {
  result = +document.getElementById("number1").value - +document.getElementById("number2").value;
  resultFuntion(result);
}
function sumOperacion() {
  result = +document.getElementById("number1").value + +document.getElementById("number2").value;
  resultFuntion(result);
}
function mulOperacion() {
  result = +document.getElementById("number1").value * +document.getElementById("number2").value;
  resultFuntion(result);
}
function divOperacion() {
  result = +document.getElementById("number1").value / +document.getElementById("number2").value;
  resultFuntion(result);
}
function potOperacion() {
  result = Math.pow(+document.getElementById("number1").value, +document.getElementById("number2").value);
  resultFuntion(result);
}
function raOperacion() {
  result = Math.sqrt(+document.getElementById("number2").value);
  resultFuntion(result);
}
function absOperacion() {
  result = Math.abs(+document.getElementById("number2").value);
  resultFuntion(result);
}
function randOperacion() {
  let min = +document.getElementById("number1").value;
  let max = +document.getElementById("number2").value;
  max = max + 1;
  result = Math.floor(Math.random() * (max - min) + min);
  resultFuntion(result);
}
function rouOperacion() {
  result = Math.round(+document.getElementById("totalOpe").value);
  resultFuntion(result);
}
function floOperacion() {
  result = Math.floor(+document.getElementById("totalOpe").value);
  resultFuntion(result);
}
function ceiOperacion() {
  result = Math.ceil(+document.getElementById("totalOpe").value);
  resultFuntion(result);
}

function resultFuntion(result) {
  document.getElementById("totalOpe").value = result;
}