const reset = document.querySelector('.again');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const no = document.querySelector('.question');
const message = document.querySelector('.message');
const click = document.querySelector('.click');
const screen = document.querySelector('.screen');

var scorevalue = 5;
var highestscore = 0;
var gno = Math.floor(Math.random() * 20);
click.addEventListener('click', function () {
  var guessno = Number(screen.value);
  if (scorevalue > 0) {
    if (guessno == gno) {
      message.textContent = 'correct answer';
      highestscore++;
      no.textContent = `${guessno}`;
    } else if (guessno > gno) {
      message.textContent = 'try smaller no.';
      scorevalue--;
    } else if (guessno < gno) {
      message.textContent = 'try bigger no.';
      scorevalue--;
    }
    score.textContent = `❤ Score: ${scorevalue}`;
    highscore.textContent = `🏆 Highscore: ${highestscore}`;
  } else if (scorevalue == 0) {
    message.textContent = 'better luck next time';
    score.textContent = `❤ Score: ${scorevalue}`;
    highscore.textContent = `🏆 Highscore: ${highestscore}`;
  }
});

reset.addEventListener('click', function () {
  scorevalue = 5;
  gno = Math.floor(Math.random() * 20);
  no.textContent = `?`;
  message.textContent = 'Guess the Number!!!';
  score.textContent = `❤ Score: ${scorevalue}`;
  highscore.textContent = `🏆 Highscore: ${highestscore}`;
});
