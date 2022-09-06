let sections = document.querySelectorAll('.section');
let game = document.querySelector('.game-container');
let messageDisplay = document.querySelector('.message');
let resultDisplay = document.querySelector('.result');
let playerScoreDisplay = document.querySelector('.player-score');
let computerScoreDisplay = document.querySelector('.computer-score');
let btn = document.querySelector('.btn');
let playerScore = 0;
let computerScore = 0;

//reset button event listener
btn.addEventListener('click', reset);

//calls computer choice every round
function getComputerChoice() {
  let choiceArray = ['rock', 'paper', 'scissor'];

  return choiceArray[Math.floor(Math.random() * 3)];
}

//check winner and display text
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

//Event listener for player pick
for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener('click', function (e) {
    let player = e.composedPath()[0].alt;

    //calls the function for computer pick
    let pc = getComputerChoice();

    playRound(player, pc);
  });
}

//check winner and game ending status
function keepScore(playerScore, computerScore) {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore > computerScore) {
      playerScoreDisplay.classList.add('won');
      computerScoreDisplay.classList.add('lost');
      messageDisplay.textContent = `Congratulations. You won!`;
    } else {
      playerScoreDisplay.classList.add('lost');
      computerScoreDisplay.classList.add('won');
      messageDisplay.textContent = `You lost. Try again?`;
    }
    gameover();
  }
}

function gameover() {
  resultDisplay.textContent = '';
  game.style.display = 'none';
  btn.style.display = 'flex';
}

function reset() {
  const classes = ['won', 'lost'];
  playerScoreDisplay.classList.remove(...classes);
  computerScoreDisplay.classList.remove(...classes);

  //Reset score & score text
  playerScore = 0;
  computerScore = 0;

  playerScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;

  //reset text
  messageDisplay.textContent = '';
  resultDisplay.textContent = '';

  //Display images & hide reset button
  btn.style.display = 'none';
  game.style.display = 'flex';
}

reset();
