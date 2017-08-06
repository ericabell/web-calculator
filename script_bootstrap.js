// grab the container for our calculator
let calculatorDiv = document.getElementById('calculator');

// add the display and calculator buttons
calculatorDiv.innerHTML = `
  <div id='displayRow'>
    ${display}
  </div>
  <div id='keys'>
    <div id='buttonGridLeft'>
      ${buttonGridLeft}
    </div>
    <div id='buttonGridCenter'>
      ${buttonGridCenter}
    </div>
    <div id='buttonGridRight'>
      ${buttonGridRight}
    </div>
  </div>
`

// set up our Vue and link to display
var app = new Vue({
  el: '#calculator',
  data: {
    commandMode: 'primary', /* primary, alt, shift-alt */
    display: '', /* display is stack[0], see note below */
    stack: [],
    stackTransferComplete: false /* gets set by Enter key */
  }
});

// Note on using the display property instead of just referencing stack[0]
// According to the Vue.js website, there are limitations of JS that do
// not allow Vue to recognize a change with stack[0] += '1'
// I tried the solution they suggested, and it didn't work out, so I'm
// sticking with my display variable to mirror the contents of stack[0]
