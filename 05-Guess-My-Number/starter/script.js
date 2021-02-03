'use strict';

// again button to restart ✔
// random number between 1 and 20 ✔
// user input to check if random number is equal to the inputed one ✔
// message each time the user tries to gess, "Too high" , "Too Low" or "Correct number" ✔
// score starts at 20 and at each time the users gesses wrong decreases 1 point ✔
// highscore starts at 0 ✔

let random = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const changeMessage = message => {
  document.querySelector('.message').textContent = message;
};

const changeScore = () => {
  document.querySelector('.score').textContent = score;
};

const changeHighScore = () => {
  document.querySelector('.highscore').textContent = highscore;
};

const checkHighScore = userInput => {
  if (highscore < score) {
    highscore = score;
    document.querySelector('.number').textContent = userInput;
    changeHighScore();
  }
};

const restart = () => {
  changeMessage('Start guessing...');
  random = Math.floor(Math.random() * 20 + 1);
  score = 20;
  changeScore();
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
};

const checkResult = () => {
  let userInput = Number(document.querySelector('.guess').value);

  if (score > 0) {
    if (!userInput) {
      changeMessage('⛔️ No number!');
    } else if (userInput === random) {
      changeMessage('🎉 Correct Number!');
      checkHighScore(userInput);
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    } else {
      changeMessage(userInput < random ? '📉 Too low!' : '📈 Too high!');
      changeScore(--score);
      if (score <= 0) {
        changeMessage('💥 You lost the game!');
      }
    }
  }
};

const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', restart);

const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', checkResult);
