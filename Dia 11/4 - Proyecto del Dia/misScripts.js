function cargarDatos() {
  let datosJason;
  fetch('resumen.json')
  .then(response => response.json())
  .then((salida) => {
    datosJason = salida;
    document.getElementById('nombre').textContent = datosJason.titular;
    document.getElementById('saldoUsd').textContent = `${datosJason.saldo[0].monto} USD`
    document.getElementById('saldoEur').textContent = `${datosJason.saldo[1].monto} EUR`
    document.getElementById('cbu').textContent = datosJason.cbu
  })
  .catch(function(error) {
    console.log(error); 
  })
}
