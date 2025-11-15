'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// Define secret Number first..
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Display message Function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// EVENT LISTENER

//1. Play game Function
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('🚫 No Number!');
    //
  } else if (guess === secretNumber) {
    displayMessage('🎉 You Got it! ✅');
    // document.querySelector('.message').textContent = '🎉 You Got it! ✅';
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬆ Too High!' : '⬇ Too Low!');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         guess > secretNumber ? '⬆ Too High!' : '⬇ Too Low!';
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😭 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '⬇ Too Low!';
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😭 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

//2. Reset game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#434343';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
