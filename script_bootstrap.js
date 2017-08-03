// grab the container for our calculator
let calculatorDiv = document.getElementById('calculator');

let headingText = `<h1>Basic Calculator</h1>`

let calculatorRows = `
  <div class='row'>
    <button type="button" id='clear-button' class="btn btn-default"> C </button>
    <button type="button" id='enter-button' class="btn btn-default"> ENTER </button>
    <button type="button" id='drop-button' class="btn btn-default"> DROP </button>
    <button type="button" id='swap-button' class="btn btn-default"> SWAP </button>
  </div>

  <div class='row'>
    <button type="button" id='square-button' class="btn btn-default"> $ x^2 $ </button>
    <button type="button" id='second-button' class="btn btn-default"> 2nd </button>

  </div>

  <div class='row'>
    <button type="button" id='seven-button' class="btn btn-default">7</button>
    <button type="button" id='eight-button' class='btn btn-default'>8</button>
    <button type="button" id='nine-button' class='btn btn-default'>9</button>
    <button type="button" id='divide-button' class='btn btn-default'>/</button>
  </div>

  <div class='row'>
    <button type="button" id='four-button' class='btn btn-default'>4</button>
    <button type="button" id='five-button' class='btn btn-default'>5</button>
    <button type="button" id='six-button' class='btn btn-default'>6</button>
    <button type="button" id='multiply-button' class='btn btn-default'>*</button>
  </div>

  <div class='row'>
    <button type="button" id='one-button' class='btn btn-default'>1</button>
    <button type="button" id='two-button' class='btn btn-default'>2</button>
    <button type="button" id='three-button' class='btn btn-default'>3</button>
    <button type="button" id='subtract-button' class='btn btn-default'>-</button>
  </div>

  <div class='row'>
    <button type="button" id='zero-button' class='btn btn-default'>0</button>
    <button type="button" id='decimal-button' class='btn btn-default'>.</button>
    <button type="button" id='add-button' class='btn btn-default'>+</button>
  </div>

  <div class='row'>
    <button type="button" id='sin-button' class='btn btn-default primary'>sin</button>
    <button type="button" id='asin-button' class='btn btn-default secondary' disabled>arcsin</button>
  </div>
`

let stackDisplay = `
  <table class="table">
    <tr>
      <td id="stack-3">{{stack[3]}}</td>
    </tr>
    <tr>
      <td id="stack-2">{{stack[2]}}</td>
    </tr>
    <tr>
      <td id="stack-1">{{stack[1]}}</td>
    </tr>
    <tr>
      <td id="stack-0">{{stack[0]}}</td>
    </tr>
    <tr>
      <td id="stack-0">{{buffer}}</td>
    </tr>
  </table>
`

calculatorDiv.innerHTML = calculatorRows + stackDisplay;

// set up our Vue and link to display
var app = new Vue({
  el: '#calculator',
  data: {
    buffer: '',
    secondFunction: false,
    stack: []
  },
  methods: {
    pushBufferToStack() {
      console.log(`moving buffer: ${Number(this.buffer)} to stack`);
      this.stack.unshift(Number(this.buffer));
      this.buffer = '';
      console.log(this.stack);
    }

  },
  watch: {
    secondFunction: function(val) {
      console.log('watch secondFunction: ' + val);
      if( val === true ) {
        // turn primary buttons off
        turnPrimaryButtonsOff();
      } else {
        // turn primary buttons on
        turnPrimaryButtonsOn();
      }
    }
  }
});

function turnPrimaryButtonsOn() {
  let primaryButtons = document.querySelectorAll('.primary');
  let secondaryButtons = document.querySelectorAll('.secondary');
  primaryButtons.forEach(function(b) {
    b.removeAttribute('disabled');
  });
  secondaryButtons.forEach(function(b) {
    b.setAttribute('disabled', '');
  })
}

function turnPrimaryButtonsOff() {
  let primaryButtons = document.querySelectorAll('.primary');
  let secondaryButtons = document.querySelectorAll('.secondary');
  primaryButtons.forEach(function(b) {
    b.setAttribute('disabled', '');
  });
  secondaryButtons.forEach(function(b) {
    b.removeAttribute('disabled');
  })
}

// add some event handlers to the buttons

// grab all the buttons
let buttons = document.querySelectorAll('.btn');

buttons.forEach( (button) => {
  // grab the id of the button so we know what it is
  switch(button.id) {
    case 'clear-button':
      button.addEventListener('click', () => {
        console.log('clear clicked');
        app.buffer = '';
      });
    break;
    case 'seven-button':
      button.addEventListener('click', () => {
        console.log('7 clicked');
        app.buffer += '7';
      });
    break;
    case 'eight-button':
      button.addEventListener('click', () => {
        console.log('8 clicked');
        app.buffer += '8';
      });
    break;
    case 'nine-button':
      button.addEventListener('click', () => {
        console.log('9 clicked');
        app.buffer += '9';
      });
    break;
    case 'divide-button':
      button.addEventListener('click', () => {
        console.log('divide clicked');
        let op1, op2, result;
        // TODO: make sure we have args to add!
        // if the buffer is empty, add stack[0] = stack[1] / stack[0]
        if(app.buffer === '') {
          op1 = app.stack.shift();
          op2 = app.stack.shift();
          app.stack.unshift(op2/op1);
        }
        else {
          // we want to divide the contents of the stack[0] by buffer
          op1 = app.stack.shift();
          op2 = Number(app.buffer);
          result = op1 / op2;
          // leave the result of the calculation on stack[0]
          app.stack.unshift(result);
        }
        // and the buffer is empty
        app.buffer = '';
      });
    break;

    case 'four-button':
      button.addEventListener('click', () => {
        console.log('4 clicked');
        app.buffer += '4';
      });
    break;
    case 'five-button':
      button.addEventListener('click', () => {
        console.log('5 clicked');
        app.buffer += '5';
      });
    break;
    case 'six-button':
      button.addEventListener('click', () => {
        console.log('6 clicked');
        app.buffer += '6';
      });
    break;
    case 'multiply-button':
      button.addEventListener('click', () => {
        console.log('multiply clicked');
        let op1, op2, result;
        // TODO: make sure we have args to add!
        // if the buffer is empty, add stack[0] = stack[0] * stack[1]
        if(app.buffer === '') {
          op1 = app.stack.shift();
          op2 = app.stack.shift();
          app.stack.unshift(op1*op2);
        }
        else {
          // we want to multiply the contents of the buffer to stack[0]
          op1 = app.stack.shift();
          op2 = Number(app.buffer);
          result = op1 * op2;
          // leave the result of the calculation on stack[0]
          app.stack.unshift(result);
        }
        // and the buffer is empty
        app.buffer = '';
      });
    break;

    case 'one-button':
      button.addEventListener('click', () => {
        console.log('1 clicked');
        app.buffer += '1';
      });
    break;
    case 'two-button':
      button.addEventListener('click', () => {
        console.log('2 clicked');
        app.buffer += '2';
      });
    break;
    case 'three-button':
      button.addEventListener('click', () => {
        console.log('3 clicked');
        app.buffer += '3';
      });
    break;
    case 'subtract-button':
      button.addEventListener('click', () => {
        console.log('subtract clicked');
        let op1, op2, result;
        // TODO: make sure we have args to add!
        // if the buffer is empty, add stack[0] = stack[1] - stack[0]
        if(app.buffer === '') {
          op1 = app.stack.shift();
          op2 = app.stack.shift();
          app.stack.unshift(op2-op1);
        }
        else {
          // we want to subtract the contents of the buffer from stack[0]
          op1 = app.stack.shift();
          op2 = Number(app.buffer);
          result = op1 - op2;
          // leave the result of the calculation on stack[0]
          app.stack.unshift(result);
        }
        // and the buffer is empty
        app.buffer = '';
      });
    break;

    case 'zero-button':
      button.addEventListener('click', () => {
        console.log('0 clicked');
        app.buffer += '0';
      });
    break;
    case 'decimal-button':
      button.addEventListener('click', () => {
        console.log('decimal clicked');
        app.buffer += '.';
      });
    break;
    case 'add-button':
      button.addEventListener('click', () => {
        console.log('add clicked');
        let op1, op2, result;
        // TODO: make sure we have args to add!
        // if the buffer is empty, add stack[0] = stack[0] + stack[1]
        if(app.buffer === '') {
          op1 = app.stack.shift();
          op2 = app.stack.shift();
          app.stack.unshift(op1+op2);
        }
        else {
          // we want to add the contents of the buffer to stack[0]
          op1 = app.stack.shift();
          op2 = Number(app.buffer);
          result = op1 + op2;
          // leave the result of the calculation on stack[0]
          app.stack.unshift(result);
        }
        // and the buffer is empty
        app.buffer = '';
      });
    break;
    case 'open-parens-button':
      button.addEventListener('click', () => {
        console.log('open paren clicked');
        app.display += '(';
      });
    break;
    case 'close-parens-button':
      button.addEventListener('click', () => {
        console.log('close paren clicked');
        app.display += ')';
      });
    break;
    case 'second-function':
      button.addEventListener('click', () => {
        console.log('second function clicked');
        // toggle the second function
        app.toggleSecond();
      })
    break;
    case 'enter-button':
      button.addEventListener('click', () => {
        console.log('enter button clicked');
        // toggle the second function
        app.pushBufferToStack();
      })
    break;
    case 'drop-button':
      button.addEventListener('click', () => {
        console.log('drop button clicked');
        // remove element from stack[0]
        app.stack.shift();
      })
    break;
    case 'swap-button':
      button.addEventListener('click', () => {
        console.log('swap button clicked');
        // swap contents of [0] and [1]
        let temp = app.stack.shift();
        let temp2 = app.stack.shift();
        app.stack.unshift(temp);
        app.stack.unshift(temp2);
      })
    break;
    case 'square-button':
      button.addEventListener('click', () => {
        console.log('square button clicked');
        let op1;
        // square contents of [0] if buffer is empty
        if(app.buffer==='') {
          op1 = app.stack.shift();
          app.stack.push(op1*op1);
        }
        else {
          op1 = Number(app.buffer);
          app.stack.push(op1*op1);
          app.buffer = '';
        }
      })
    break;
    case 'second-button':
      button.addEventListener('click', () => {
        console.log('second button clicked');
        // toggle the second-function property
        if( app.secondFunction === false ) {
          app.secondFunction = true;
        } else {
          app.secondFunction = false;
        }
      })
    break;
    case 'sin-button':
      button.addEventListener('click', () => {
        console.log('sin button clicked');
        let op1, result;
        // take sin of buffer if there is something there
        if(app.buffer === '') {
          // take sin of stack[0]
          let op1 = app.stack.shift();
          let result = math.sin(op1);
        } else {
          // take the sin of the buffer
          let op1 = app.buffer;
          let result = math.sin(op1);
          app.buffer = result;
        }
      })
    break;
    default:
      button.addEventListener('click', () => {
        console.log('button not assigned a function');
      })

  } // end switch
});
