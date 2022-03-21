///////////////////////////////////////////// SELECIONA A COR A SER USADA

const colorPicker = document.getElementsByClassName('color');
let colorChosen;

for (let i = 0; i < colorPicker.length; i += 1) {
  colorPicker[i].addEventListener('click', selectColor);
}

function selectColor(event) {
  for (let i = 0; i < colorPicker.length; i += 1) {
    colorPicker[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

///////////////////////////////////////////// GERA O GRID DE PIXELS

const pixelBoard = document.getElementById('pixel-board');
let boardSize = 25;
document.getElementById('pixel-board').style.backgroundColor = 'white';
function createBoard() {
  for (let i = 0; i < boardSize; i += 1) {
    const pixel = document.createElement('div');
    pixel.setAttribute('id', 'pixel' + i);
    pixel.className += 'pixel';
    pixel.addEventListener('click', fillColor);
    pixel.style.backgroundColor = 'white';
    pixelBoard.appendChild(pixel);
  }
}

createBoard();

///////////////////////////////////////////// COLORIR O GRID

function fillColor(event) {
  const element = document.getElementsByClassName('selected')[0];
  const object = window.getComputedStyle(element, null);

  event.target.style.backgroundColor =
    object.getPropertyValue('background-color');
}

///////////////////////////////////////////// RESETAR O GRID

function clearBoard() {
  const pixelsToReset = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelsToReset.length; i += 1) {
    pixelsToReset[i].style.backgroundColor = 'white';
  }
}
