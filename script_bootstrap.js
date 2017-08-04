// grab the container for our calculator
let calculatorDiv = document.getElementById('calculator');

let headingText = `<h1>Basic Calculator</h1>`

calculatorDiv.innerHTML = `
  ${headingText}
  <div class='keys'>
    <div class='buttonGridLeft'>
      ${buttonGridLeft}
    </div>
    <div class='buttonGridCenter'>
      ${buttonGridCenter}
    </div>
    <div class='buttonGridRight'>
      ${buttonGridRight}
    </div>
  </div>
`


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
    case 'clearstack-button':
      button.addEventListener('click', () => {
        console.log('clear stack button clicked');
        // swap contents of [0] and [1]
        app.stack = [];
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
    case 'asin-button':
      button.addEventListener('click', () => {
        console.log('asin button clicked');
        let op1, result;
        // take sin of buffer if there is something there
        if(app.buffer === '') {
          // take sin of stack[0]
          let op1 = app.stack.shift();
          let result = math.asin(op1);
        } else {
          // take the sin of the buffer
          let op1 = app.buffer;
          let result = math.asin(op1);
          app.buffer = result;
        }
      })
    break;
    case 'cos-button':
      button.addEventListener('click', () => {
        console.log('cos button clicked');
        let op1, result;
        // take sin of buffer if there is something there
        if(app.buffer === '') {
          // take sin of stack[0]
          let op1 = app.stack.shift();
          let result = math.cos(op1);
        } else {
          // take the sin of the buffer
          let op1 = app.buffer;
          let result = math.cos(op1);
          app.buffer = result;
        }
      })
    break;
    case 'acos-button':
      button.addEventListener('click', () => {
        console.log('acos button clicked');
        let op1, result;
        // take sin of buffer if there is something there
        if(app.buffer === '') {
          // take sin of stack[0]
          let op1 = app.stack.shift();
          let result = math.acos(op1);
        } else {
          // take the sin of the buffer
          let op1 = app.buffer;
          let result = math.acos(op1);
          app.buffer = result;
        }
      })
    break;
    case 'tan-button':
      button.addEventListener('click', () => {
        console.log('tan button clicked');
        let op1, result;
        // take sin of buffer if there is something there
        if(app.buffer === '') {
          // take sin of stack[0]
          let op1 = app.stack.shift();
          let result = math.tan(op1);
        } else {
          // take the sin of the buffer
          let op1 = app.buffer;
          let result = math.tan(op1);
          app.buffer = result;
        }
      })
    break;
    case 'atan-button':
      button.addEventListener('click', () => {
        console.log('atan button clicked');
        let op1, result;
        // take sin of buffer if there is something there
        if(app.buffer === '') {
          // take sin of stack[0]
          let op1 = app.stack.shift();
          let result = math.atan(op1);
        } else {
          // take the sin of the buffer
          let op1 = app.buffer;
          let result = math.atan(op1);
          app.buffer = result;
        }
      })
    break;
    case 'e-button':
      button.addEventListener('click', () => {
        console.log('e button clicked');
        let op1, result;
        // take sin of buffer if there is something there
        if(app.buffer === '') {
          // take sin of stack[0]
          let op1 = app.stack.shift();
          let result = math.e(op1);
        } else {
          // take the sin of the buffer
          let op1 = app.buffer;
          let result = math.exp(op1);
          app.buffer = result;
        }
      })
    break;
    case 'ln-button':
      button.addEventListener('click', () => {
        console.log('ln button clicked');
        let op1, result;
        // take sin of buffer if there is something there
        if(app.buffer === '') {
          // take sin of stack[0]
          let op1 = app.stack.shift();
          let result = math.ln(op1);
        } else {
          // take the sin of the buffer
          let op1 = app.buffer;
          let result = math.log(op1);
          app.buffer = result;
        }
      })
    break;
    case 'pi-button':
      button.addEventListener('click', () => {
        console.log('pi button clicked');
        app.buffer = math.pi;
      })
    break;

    default:
      button.addEventListener('click', () => {
        console.log('button not assigned a function');
      })

  } // end switch
});
