import React from "react";

function ActionButton() {
  function showNumber() {
    let inputGame = document.getElementById('inputGame');
    let randomNumber = Math.floor(Math.random() * 100);
    if (inputGame.value < 0 || inputGame.value === '') {
      alert('Please write a valid number');
    } else {
      if (Number(inputGame.value) === Number(randomNumber)) {
        alert('You Win');
      } else {
        alert('You Lose');
      }
    }
    inputGame.value = 0;
  };

  return (
    <button onClick={showNumber} className="btn btn-success px-5 py-2">Send Number</button>
  )
}

export default ActionButton;