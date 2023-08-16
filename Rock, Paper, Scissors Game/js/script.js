const resetButton = document.getElementById('reset-button');
const userChoiceImg = document.getElementById('user-choice-img');
const computerChoiceImg = document.getElementById('computer-choice-img');

resetButton.addEventListener('click', resetGame);

function resetGame() {
  userScore = 0;
  computerScore = 0;
  updateScore();
  resultText.textContent = 'Choose your weapon!';
  userChoiceImg.style.display = 'none';
  computerChoiceImg.style.display = 'none';
}

function playGame(event) {
  const userChoice = event.target.id;
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  displayResult(result);

  userChoiceImg.src = `${userChoice}.png`;
  userChoiceImg.style.display = 'inline';
  computerChoiceImg.src = `${computerChoice}.png`;
  computerChoiceImg.style.display = 'inline';

  // ... Keep the rest of your code ...
}




const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');

choices.forEach(choice => {
  choice.addEventListener('click', playGame);
});


function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

function displayResult(result) {
  resultText.textContent = result;
}


// In this example, I've created a simple Rock, Paper, Scissors game. The user can select their choice, and the computer's choice is determined randomly. The game then displays the result of the match.

// Feel free to enhance this game by adding more styling, keeping track of scores, and adding more interactivity.



let userScore = 0;
let computerScore = 0;

function playGame(event) {
  const userChoice = event.target.id;
  const computerChoice = getComputerChoice();

  const result = determineWinner(userChoice, computerChoice);

  if (result.includes('You win')) {
    userScore++;
  } else if (result.includes('Computer wins')) {
    computerScore++;
  }

  updateScore();

  displayResult(result);
}

function updateScore() {
  const userScoreElement = document.getElementById('user-score');
  const computerScoreElement = document.getElementById('computer-score');
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
}
