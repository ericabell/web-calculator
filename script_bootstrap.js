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
    display: '',
    commandMode: 'primary', /* primary, alt, shift-alt */
    stack: []
  }
});
