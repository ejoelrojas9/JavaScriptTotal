import React from 'react';
import Saludo from './Saludo';
import Mensaje from './Mensaje';

function App() {
  return (
    <div>
      <Saludo nombre='Juan'/>
      <Mensaje mensaje='Bienvenido a mi aplicación React' />
      <Saludo nombre='Federico'/>
      <Mensaje mensaje='Bienvenido a mi aplicación React' />
    </div>
  )
}

export default App;