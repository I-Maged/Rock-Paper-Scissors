let sections = document.querySelectorAll('.section');
let messageDisplay = document.querySelector('.message');
let resultDisplay = document.querySelector('.result');
let playerScoreDisplay = document.querySelector('.player-score');
let computerScoreDisplay = document.querySelector('.computer-score');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choiceArray = ['rock', 'paper', 'scissor'];

  return choiceArray[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  messageDisplay.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}`;

  if (playerSelection == computerSelection) {
    resultDisplay.textContent = `Draw. You both chose ${computerSelection}`;
  } else if (
    (playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissor') ||
    (playerSelection == 'scissor' && computerSelection == 'rock')
  ) {
    resultDisplay.textContent = `You won. ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    resultDisplay.textContent = `Computer won. ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }

  keepScore(playerScore, computerScore);
}

for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener('click', function (e) {
    let player = e.composedPath()[0].alt;
    let pc = getComputerChoice();

    playRound(player, pc);
  });
}

function keepScore(playerScore, computerScore) {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore > computerScore) {
      playerScoreDisplay.classList.add('won');
      computerScoreDisplay.classList.add('lost');
    } else {
      playerScoreDisplay.classList.add('lost');
      computerScoreDisplay.classList.add('won');
    }
  }
}
