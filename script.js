// grab the container for our calculator
let calculatorDiv = document.getElementById('calculator');

let calculatorRows = `
  <div class='row'>
    <div id='clear-button' class='button'>C</div>
    <div class='display'>DISPLAY</div>
  </div>

  <div class='row'>
    <div id='seven-button' class='button'>7</div>
    <div id='eight-button' class='button'>8</div>
    <div id='nine-button' class='button'>9</div>
    <div id='divide-button' class='button'>/</div>
  </div>

  <div class='row'>
    <div id='four-button' class='button'>4</div>
    <div id='five-button' class='button'>5</div>
    <div id='six-button' class='button'>6</div>
    <div id='multiply-button' class='button'>*</div>
  </div>

  <div class='row'>
    <div id='one-button' class='button'>1</div>
    <div id='two-button' class='button'>2</div>
    <div id='three-button' class='button'>3</div>
    <div id='subtract-button' class='button'>-</div>
  </div>

  <div class='row'>
    <div id='zero-button' class='button'>0</div>
    <div id='decimal-button' class='button'>.</div>
    <div id='equals-button' class='button'>=</div>
    <div id='add-button' class='button'>+</div>
  </div>
`

calculatorDiv.innerHTML = calculatorRows;

//
// // build up the first row
// let firstRow = document.createElement('div');
// let clearButton = document.createElement('div');
// clearButton.id = 'clear';
// let clearButtonText = document.createTextNode('C');
// clearButton.appendChild(clearButtonText);
// let display = document.createElement('div');
// display.id = 'display';
// firstRow.appendChild(clearButton);
// firstRow.appendChile(display);
//
// // build up the second row
// let secondRow = document.createElement('div');
// let sevenButton = document.createElement('div');
// sevenButton.id = '7';
// let eightButton = document.createElement('div');
// eightButton.id = '8';
// let nineButton = document.createElement('div');
// nineButton.id = '9';
// let divideButton = document.createElement('div');
// divideButton.id = '/';
// secondRow.appendChild(sevenButton);
// secondRow.appendChild(eightButton);
// secondRow.appendChild(nineButton);
// secondRow.appendChild(divideButton);
//
// // build up the third row
// let thirdRow = document.createElement('div');
// let fourButton = document.createElement('div');
// fourButton.id = '4';
// let fiveButton = document.createElement('div');
// fiveButton.id = '5';
// let sixButton = document.createElement('div');
// sixButton.id = '6';
// let multiplyButton = document.createElement('div');
// multiplyButton.id = '*';
// thirdRow.appendChild(fourButton);
// thirdRow.appendChild(fiveButton);
// thirdRow.appendChild(sixButton);
// thirdRow.appendChild(multiplyButton);
//
// // build up the fourth row
// let fourthRow = document.createElement('div');
// let oneButton = document.createElement('div');
// oneButton.id = '1';
// let twoButton = document.createElement('div');
// twoButton.id = '2';
// let threeButton = document.createElement('div');
// threeButton.id = '3';
// let subtractButton = document.createElement('div');
// subtractButton.id = '-';
// fourthRow.appendChild(oneButton);
// fourthRow.appendChild(twoButton);
// fourthRow.appendChild(threeButton);
// fourthRow.appendChild(subtractButton);
//
// // build up the fifth row
// let fifthRow = document.createElement('div');
// let zeroButton = document.createElement('div');
// zeroButton.id = '0';
// let decimalButton = document.createElement('div');
// decimalButton.id = '.';
// let equalsButton = document.createElement('div');
// equalsButton.id = '=';
// let addButton = document.createElement('div');
// addButton.id = '+';
// fifthRow.appendChild(zeroButton);
// fifthRow.appendChild(decimalButton);
// fifthRow.appendChild(equalsButton);
// fifthRow.appendChild(addButton);
//
// // append the rows to the calculator
// calculatorDiv.appendChild(firstRow);
// calculatorDiv.appendChild(secondRow);
// calculatorDiv.appendChild(thirdRow);
// calculatorDiv.appendChild(fourthRow);
// calculatorDiv.appendChild(fifthRow);
