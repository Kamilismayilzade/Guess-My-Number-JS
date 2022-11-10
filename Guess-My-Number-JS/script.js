'use strict';

/*

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number 🐱‍👤';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 21;
console.log(document.querySelector('.guess').value);

*/

// document.querySelector('.check').onclick = () => {};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number ⛔';
    displayMessage('No Number ⛔');
  }
  // When the player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number 🐱‍👤';
    displayMessage('Correct Number 🐱‍👤');
    score++;
    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style = 'background: green'; // or
    //document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When the player guesses high number
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High 💋' : 'Too Low 🤳';
      displayMessage(guess > secretNumber ? 'Too High 💋' : 'Too Low 🤳');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost the Game 🐱';
      displayMessage('You Lost the Game 🐱');
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
  else if (guess > secretNumber) {
  }
  // When the player guesses low number
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game 🐱';
      document.querySelector('.score').textContent = 0;
    }
  }
});
*/


  // Again Button
  document.querySelector('.again').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    // document.querySelector('.message').textContent = 'Start Guessing...';
    displayMessage('Start Guessing...');

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    document.querySelector('body').style = 'background: #222';
    document.querySelector('.number').style.width = '15rem';
  });
});
