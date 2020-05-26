let area = document.getElementById('area');
let cell = document.getElementsByClassName('cell');
let currentPlayer = document.getElementById('curPlyr');

let player = 'x';
let stat = {
  'x': 0,
  'o': 0,
  'd': 0
};

let winIndex = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

for (let i = 0; i < 9; i++) {
  area.innerHTML += `<div class="cell" pos=${i}></div>`;
}

for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener('click', cellClick, false);
}

function cellClick() {

  let data = [];

  if (!this.innerHTML) {
    this.innerHTML = player;
  } else {
    alert('Cells have got a symbol');
    return;
  }

  cell.forEach(element => {
    if (element.innerHTML == player) {
      data.push(parseInt(element.getAttribute('pos')));
    }
  });

  if (checkWin(data)) {
    stat[player] += 1;
    restart(`Player ${player} win`);
  } else {
    let draw = true;
    cell.forEach(element => {
      if (element.innerHTML == '') {
        draw = false;
      }
      if (draw) {

      }
    })
  }
}