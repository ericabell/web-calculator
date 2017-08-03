// grab the container for our calculator
let calculatorDiv = document.getElementById('calculator');

let headingText = `<h1>Basic Calculator</h1>`

let calculatorRows = `
  <div class='row'>
    <button type="button" id='clear-button' class="btn btn-default"> C </button>
    <button type="button" id='enter-button' class="btn btn-default"> ENTER </button>
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
    second: false,
    stack: []
  },
  methods: {
    toggleSecond() {
      if(this.second === true) {
        this.second = false;
        this.$refs.second.innerText = '2nd';
      } else {
        this.second = true;
        this.$refs.second.innerText = 'On';
      }
    },

    pushBufferToStack() {
      console.log(`moving buffer: ${Number(this.buffer)} to stack`);
      this.stack.unshift(Number(this.buffer));
      this.buffer = '';
      console.log(this.stack);
    }

  }

});


// add some event handlers to the buttons

// grab all the buttons
let buttons = document.querySelectorAll('.btn');

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
        app.display += '/';
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
        app.display += '*';
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
        app.display += '-';
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
    case 'equals-button':
      button.addEventListener('click', () => {
        console.log('equals clicked');
        app.display = eval(app.display);
      });
    break;
    case 'add-button':
      button.addEventListener('click', () => {
        console.log('add clicked');
        app.display += '+';
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
    default:
      button.addEventListener('click', () => {
        console.log('button not assigned a function');
      })

  }
});
