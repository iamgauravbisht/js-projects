const newgame = document.querySelector('.newgame');
const rolldice = document.querySelector('.rolldice');
const hold = document.querySelector('.hold');

const p1s = document.querySelector('.p0s');
const p2s = document.querySelector('.p1s');
const p1c = document.querySelector('.p0c');
const p2c = document.querySelector('.p1c');

const img = document.querySelector('.images');
const won = document.querySelector('.won');
const wontext = document.querySelector('.wontext');
const wnewgame = document.querySelector('.wnewgame');

let score = [0, 0];
let active = 0;
let a = [0, 0];

function checkwinner() {
  if (10 <= Number(p1s.textContent)) {
    won.classList.remove('hwon');
    wontext.textContent = '🎉🏆🎉🏆PLAYER1 WON🏆🎉🏆🎉';
  } else if (10 <= Number(p2s.textContent)) {
    won.classList.remove('hwon');
    wontext.textContent = '🎉🏆🎉🏆PLAYER2 WON🏆🎉🏆🎉';
  } else {
  }
}

rolldice.addEventListener('click', () => {
  let dice = Math.trunc(Math.random() * 6) + 1;
  img.src = `number${dice}.jpg`;
  if (dice == 1) {
    active++;
    p1c.textContent = score[0] = 0;
    p2c.textContent = score[1] = 0;
  } else {
    if (active % 2 == 0) {
      score[0] += dice;
      p1c.textContent = score[0];
    } else {
      score[1] += dice;
      p2c.textContent = score[1];
    }
  }
});
hold.addEventListener('click', () => {
  if (active % 2 == 0) {
    a[0] = Number(p1c.textContent) + Number(p1s.textContent);
    p1c.textContent = score[0] = 0;
  } else {
    a[1] = Number(p2c.textContent) + Number(p2s.textContent);
    p2c.textContent = score[1] = 0;
  }
  p1s.textContent = a[0];
  p2s.textContent = a[1];
  active++;
  checkwinner();
});
newgame.addEventListener('click', () => {
  p1c.textContent = score[0] = 0;
  p2c.textContent = score[1] = 0;
  active = 0;
  p1s.textContent = a[0] = 0;
  p2s.textContent = a[1] = 0;
  img.src = `number1.jpg`;
});
wnewgame.addEventListener('click', () => {
  p1c.textContent = score[0] = 0;
  p2c.textContent = score[1] = 0;
  active = 0;
  p1s.textContent = a[0] = 0;
  p2s.textContent = a[1] = 0;
  img.src = `number1.jpg`;
  won.classList.add('hwon');
});

// let score = [0, 0];
// let active = 0;
// let current = 0;

// const switchplayer = function () {
//   current = 0;
//   document.querySelector(`.p${active}c`).textContent = current;
//   active = active == 0 ? 1 : 0;
// };

// rolldice.addEventListener('click', function () {
//   // show dice
//   let dice = Math.trunc(Math.random() * 6) + 1;
//   // image of dice
//   img.src = `number${dice}.jpg`;
//   // if dice is not one
//   console.log(active);
//   if (dice !== 1) {
//     // add dice value to current and update current
//     current += dice;
//     document.querySelector(`.p${active}c`).textContent = current;
//   } else {
//     // switch player
//     switchplayer();
//   }
// });

// hold.addEventListener('click', function () {
//   // add value to p0s or p1s
//   score[`${active}`] += current;
//   document.querySelector(`.p${active}s`).textContent = score[`${active}`];
//   current = 0;
//   // check if the player won else switch
//   if (score[`${active}`] >= 10) {
//     won.classList.remove('hwon');
//     wontext.textContent = `🎉🏆🎉🏆PLAYER${active + 1} WON🏆🎉🏆🎉`;
//   } else {
//     // switch player
//     switchplayer();
//   }
// });
