let buttonSearch = document.getElementById('searchButton'); // Button 'Search'
let ulList = document.getElementById('istItems');           // Ul to list
let selectToGen = document.getElementById('selectItemGen'); // Select element
let inputSelecting = document.getElementById('inputSearch');
let itemGen = selectToGen.value;
let jsonFile;

selectToGen.addEventListener('change', selectGen);

function selectGen() {
  let selectGenEvent = new CustomEvent('selectGen');
  selectToGen.dispatchEvent(selectGenEvent);
}

selectToGen.addEventListener('selectGen', function () {
  itemGen = `${selectToGen.value}`;
  alert(`Se modifico la busqueda a ${itemGen.toUpperCase()}`);
})

function checkCaracters(event) {
  if (event.keyCode != 32 && event.keyCode != 8 && event.keyCode <= 64 && event.keyCode >= 91){
    event.preventDefault();
  }
}

inputSelecting.addEventListener('keydown', checkCaracters);

buttonSearch.addEventListener('click', function () {
  fetch(`${itemGen}.json`)
  .then(response => response.json())
  .then((result) => {
    jsonFile = result.data;
    for(let item of jsonFile) {
      if (item.nombre.startsWith(inputSelecting.value.toUpperCase()) ){
        let liItem = document.createElement('li');
        let p = document.createElement('p');
        p.textContent = item.sinopsis;
        p.style.display = 'none';
        liItem.textContent = item.nombre;
        liItem.appendChild(p);
        listItems.appendChild(liItem);
        liItem.addEventListener('mouseover', function () {
          p.style.display = 'block';
        });
        liItem.addEventListener('mouseout', function () {
          p.style.display = 'none';
        })
      }
    }
  })
})