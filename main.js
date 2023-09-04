const firstScreen = document.querySelector('.screen1');
const secondScreen = document.querySelector('.screen2');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
let randomNumber = Math.round(Math.random() * 10);
let attemps = 1;

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleTryAgain);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && firstScreen.classList.contains('hide')) {
    handleTryAgain();
  }
});

function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector('#inputNumber');

  if (
    Number(inputNumber.value) === randomNumber &&
    (Number(inputNumber.value) <= 10 || Number(inputNumber.value) >= 0)
  ) {
    toogleScreen();

    const attempsValue = secondScreen.querySelector('h2');
    attempsValue.innerText = `Você acertou em ${attemps} tentativas!`;
  }

  inputNumber.value = '';
  attemps++;
}

function handleTryAgain() {
  toogleScreen();
  randomNumber = Math.round(Math.random() * 10);
  attemps = 1;
}

function toogleScreen() {
  secondScreen.classList.toggle('hide');
  firstScreen.classList.toggle('hide');
}
