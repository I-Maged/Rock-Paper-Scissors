let sections = document.querySelectorAll('.section');
let messageDisplay = document.querySelector('.message');
let resultDisplay = document.querySelector('.result');
let rockSpan = document.querySelector('.rock');
let paperSpan = document.querySelector('.paper');
let scissorSpan = document.querySelector('.scissor');

function randomPick() {
  let randomArray = ['rock', 'paper', 'scissor'];

  return randomArray[Math.floor(Math.random() * 3)];
}

function displayChoices(playerPick, pcPick) {
  console.log(`You chose ${playerPick}. Computer chose ${pcPick}`);
  messageDisplay.textContent = `You chose ${playerPick}. Computer chose ${pcPick}`;

  if (playerPick == pcPick) {
    resultDisplay.textContent = `Draw. You both chose ${pcPick}`;
  } else {
    resultDisplay.textContent = `Not draw`;
  }
}

for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener('click', function (e) {
    let player = e.composedPath()[0].alt;
    let pc = randomPick();

    displayChoices(player, pc);
  });
}
