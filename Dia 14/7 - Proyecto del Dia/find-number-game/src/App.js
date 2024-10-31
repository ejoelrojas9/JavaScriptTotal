import React from 'react';
import H1 from './H1';
import Input from './Input';
import ActionButton from './ActionButton';

function App() {
  return (
    <div>
      <H1 text='Find Number Game'/><br></br>
      <Input id='inputGame'/>
      <ActionButton />
    </div>
  )
}

export default App;
