const options = ["lapis", "papyrus", "scalpellus"];
let playerChoice = "";

document.querySelector('#lapis').addEventListener("click", pickLapis);
document.getElementById('papyrus').addEventListener("click", pickPapyrus);
document.getElementById('scalpellus').addEventListener("click", pickScalpellus);

  function computerChooses() {
    return options[Math.floor(Math.random()*3)]
  };

function pickLapis() {
  playerChoice = options[0];

  if (computerChooses() === options[0]) {
    hTwo.innerText = `It is a tie! Computer and player both chose ${computerChooses()}`;
  hOne.appendChild(hTwo);
} else if (computerChooses() === options[1]) {
  hTwo.innerText = `The computer wins! The computer chose ${options[1]} and the player chose ${options[0]}`;
    hOne.appendChild(hTwo);
  } else {
    hTwo.innerText = `The player wins! The computer chose ${options[2]} and the player chose ${options[0]}`;
    hOne.appendChild(hTwo);
  }
  };

  function pickPapyrus() {
  playerChoice = options[1];
    if (computerChooses() === options[0]) {
      hTwo.innerText = `The player wins! The computer chose ${options[0]} and the player chose ${options[1]}`;
    hOne.appendChild(hTwo);
  } else if (computerChooses() === options[1]) {
      hTwo.innerText = `It is a tie! Computer and player both chose ${computerChooses()}`;
  hOne.appendChild(hTwo);
} else {
    hTwo.innerText = `The computer wins! The computer chose ${options[2]} and the player chose ${options[1]}`;
    hOne.appendChild(hTwo);
  }
};
function pickScalpellus() {
  playerChoice = options[2];
  if (computerChooses() === options[0]) {
    hTwo.innerText = `The computer wins! The computer chose ${options[0]} and the player chose ${options[2]}`;
    hOne.appendChild(hTwo);
  } else if (computerChooses() === options[1]) {
    hTwo.innerText = `The player wins! The computer chose ${options[1]} and the player chose ${options[2]}`;
    hOne.appendChild(hTwo);
  } else {
    hTwo.innerText = `It is a tie! Computer and player both chose ${computerChooses()}`;
  hOne.appendChild(hTwo);
}; 
};

const hOne = document.querySelector('h1');
const hTwo = document.createElement('h2');