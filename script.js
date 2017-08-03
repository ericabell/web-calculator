// configure Math.js to use fractions
// math.config({
//   number: 'Fraction'
// });


// grab the container for our calculator
let calculatorDiv = document.getElementById('calculator');

let headingText = `<h1>Basic Calculator</h1>`

let calculatorRows = `
  <div class='row'>
    <div id='clear-button' class='button'>C</div>
    <div class='display'>{{display}}</div>
  </div>

  <div class='row'>
    <div id='seven-button' class='button'>7</div>
    <div id='eight-button' class='button'>8</div>
    <div id='nine-button' class='button'>9</div>
    <div id='divide-button' class='button operator'>/</div>
  </div>

  <div class='row'>
    <div id='four-button' class='button'>4</div>
    <div id='five-button' class='button'>5</div>
    <div id='six-button' class='button'>6</div>
    <div id='multiply-button' class='button operator'>*</div>
  </div>

  <div class='row'>
    <div id='one-button' class='button'>1</div>
    <div id='two-button' class='button'>2</div>
    <div id='three-button' class='button'>3</div>
    <div id='subtract-button' class='button operator'>-</div>
  </div>

  <div class='row'>
    <div id='zero-button' class='button'>0</div>
    <div id='decimal-button' class='button'>.</div>
    <div id='equals-button' class='button'>=</div>
    <div id='add-button' class='button operator'>+</div>
  </div>
`

calculatorDiv.innerHTML = calculatorRows;

// set up our Vue and link to display
var app = new Vue({
  el: '#calculator',
  data: {
    display: ''
  }
});


// add some event handlers to the buttons

// grab all the buttons
let buttons = document.querySelectorAll('.button');

let calculation = '';

buttons.forEach( (button) => {
  // grab the id of the button so we know what it is
  switch(button.id) {
    case 'clear-button':
      button.addEventListener('click', () => {
        console.log('clear clicked');
        app.display = '';
      });
    break;
    case 'seven-button':
      button.addEventListener('click', () => {
        console.log('7 clicked');
        app.display += '7';
      });
    break;
    case 'eight-button':
      button.addEventListener('click', () => {
        console.log('8 clicked');
        app.display += '8';
      });
    break;
    case 'nine-button':
      button.addEventListener('click', () => {
        console.log('9 clicked');
        app.display += '9';
      });
    break;
    case 'divide-button':
      button.addEventListener('click', () => {
        console.log('divide clicked');
        app.display += '/';
      });
    break;

    case 'four-button':
      button.addEventListener('click', () => {
        console.log('4 clicked');
        app.display += '4';
      });
    break;
    case 'five-button':
      button.addEventListener('click', () => {
        console.log('5 clicked');
        app.display += '5';
      });
    break;
    case 'six-button':
      button.addEventListener('click', () => {
        console.log('6 clicked');
        app.display += '6';
      });
    break;
    case 'multiply-button':
      button.addEventListener('click', () => {
        console.log('multiply clicked');
        app.display += '*';
      });
    break;

    case 'one-button':
      button.addEventListener('click', () => {
        console.log('1 clicked');
        app.display += '1';
      });
    break;
    case 'two-button':
      button.addEventListener('click', () => {
        console.log('2 clicked');
        app.display += '2';
      });
    break;
    case 'three-button':
      button.addEventListener('click', () => {
        console.log('3 clicked');
        app.display += '3';
      });
    break;
    case 'subtract-button':
      button.addEventListener('click', () => {
        console.log('subtract clicked');
        app.display += '-';
      });
    break;

    case 'zero-button':
      button.addEventListener('click', () => {
        console.log('0 clicked');
        app.display += '0';
      });
    break;
    case 'decimal-button':
      button.addEventListener('click', () => {
        console.log('decimal clicked');
        app.display += '.';
      });
    break;
    case 'equals-button':
      button.addEventListener('click', () => {
        console.log('equals clicked');
        app.display = math.eval(app.display);
      });
    break;
    case 'add-button':
      button.addEventListener('click', () => {
        console.log('add clicked');
        app.display += '+';
      });
    break;


  }
});
