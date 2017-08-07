// grab the left grid

let leftGrid = document.querySelector('#buttonGridLeft');

// one event handler for the buttons in this group, I will determine
// which button is pressed by looking at the id attached to the event

leftGrid.addEventListener('click', (event) => {
  console.log('left grid click event');
  // event will be a MouseEvent
  // event.path[1] will be the button, which might change if html changes...
  let command = event.path[1].id
  handleGridLeftCommand(command);
});

function handleGridLeftCommand(command) {
  console.log(`handleGridLeftCommand: ${command}`);

  switch(command) {
    case 'back-arrow-button':
      console.log('Back arrow button pressed');
      // delete the last number entered
      app.display = app.display.substring(0, app.display.length - 1);
    break;

  }

}
