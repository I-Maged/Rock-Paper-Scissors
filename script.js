let rockSpan = document.querySelector('.rock');
let paperSpan = document.querySelector('.paper');
let scissorSpan = document.querySelector('.scissor');

rockSpan.addEventListener('click', function (e) {
  randomPick();
});
paperSpan.addEventListener('click', function (e) {
  randomPick();
});
scissorSpan.addEventListener('click', function (e) {
  randomPick();
});

function randomPick() {
  let randomArray = ['rock', 'paper', 'scissor'];

  console.log(randomArray[Math.floor(Math.random() * 3)]);
}
