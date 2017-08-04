// grab the right grid

let centerGrid = document.querySelector('#buttonGridCenter');

// one event handler for the buttons in this group, I will determine
// which button is pressed by looking at the id attached to the event

centerGrid.addEventListener('click', (event) => {
  console.log('center grid click event');
  // event will be a MouseEvent
  // event.path[1] will be the button, which might change if html changes...
  let command = event.path[1].id
  handleGridCenterCommand(command);
});

function handleGridCenterCommand(command) {
  console.log(`handleGridCenterCommand: ${command}`);

  switch(command) {
    case 'enter-button':
      app.display += '1';
    break;

  }

}
