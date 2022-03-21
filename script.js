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

function createBoard() {
  for (let i = 0; i < boardSize; i += 1) {
    const pixel = document.createElement('div');
    pixel.setAttribute('id', 'pixel' + i);
    pixel.className += 'pixel';
    pixel.addEventListener('click', fillColor);
    pixel.style.backgroundColor = 'pink';
    pixelBoard.appendChild(pixel);
  }
}

createBoard();

///////////////////////////////////////////// COLORIR O GRID

function fillColor(event) {}

///////////////////////////////////////////// RESETAR O GRID

function clearBoard() {
  const pixelsToReset = document.getElementsByClassName('pixel');
  for (let i in pixelsToReset) {
    pixelsToReset[i].style.backgroundColor = 'white';
  }
}
