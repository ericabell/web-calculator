// grab the right grid

let rightGrid = document.querySelector('#buttonGridRight');

// one event handler for the buttons in this group, I will determine
// which button is pressed by looking at the id attached to the event

rightGrid.addEventListener('click', (event) => {
  console.log('right grid click event');
  // event will be a MouseEvent
  // event.path[1] will be the button, which might change if html changes...
  let command = event.path[1].id
  handleGridRightCommand(command);
});

function handleGridRightCommand(command) {
  console.log(`handleGridRightCommand: ${command}`);

  // if a stack transfer just happened, we will need to clear
  // the display first, then process the entry
  if( app.stackTransferComplete === true ) {
    app.display = ''; // clean the display
    app.stackTransferComplete = false; // reset the flag
  }

  switch(command) {
    case 'one-button':
      app.display += '1';
    break;
    case 'two-button':
      app.display += '2';
    break;
    case 'three-button':
      app.display += '3';
    break;
    case 'four-button':
      app.display += '4';
    break;
    case 'five-button':
      app.display += '5';
    break;
    case 'six-button':
      app.display += '6';
    break;
    case 'seven-button':
      app.display += '7';
    break;
    case 'eight-button':
      app.display += '8';
    break;
    case 'nine-button':
      app.display += '9';
    break;
    case 'add-button':
      // add x (display) to register y
      app.display = Number(app.stack[0]) + Number(app.display);
      app.stack.pop();
    break;
    case 'subtract-button':
      // add x (display) to register y
      app.display = Number(app.stack[0]) - Number(app.display);
      app.stack.pop();
    break;
    case 'multiply-button':
      // add x (display) to register y
      app.display = Number(app.stack[0]) * Number(app.display);
      app.stack.pop();
    break;
    case 'divide-button':
      // add x (display) to register y
      app.display = Number(app.stack[0]) / Number(app.display);
      app.stack.pop();
    break;

  }

}
