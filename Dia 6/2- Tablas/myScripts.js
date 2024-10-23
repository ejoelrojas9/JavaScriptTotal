function tableSelect() {
  // Get table from number
  let elementTableNumber = document.getElementById('tabla').value;
  let numberTable = Number(elementTableNumber);
  console.log(numberTable);

  // Get table
  let elementTableResult = document.getElementById('tableList');

  // Show table
  for ( x = 0; x <= 10; x++) {
    // Result calculate
    const numberResult = numberTable * x;

    // Show table string
    let resultText = numberTable + " por " + x + " es igual a " + numberResult

    // Create item list
    let itemList = document.createElement('li');
    itemList.innerText = resultText;

    elementTableResult.appendChild(itemList);
  }
}