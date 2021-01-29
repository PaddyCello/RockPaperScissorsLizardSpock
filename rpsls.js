const options = ["rock", "paper", "scissors", "lizard", "Spock"];
let playerChoice = "";
let computerChoice = "";

function computerChooses() {
  computerChoice = options[Math.floor(Math.random()*5)]
};

document.getElementById('rock').addEventListener("click", pickRock);
document.getElementById('paper').addEventListener("click", pickPaper);
document.getElementById('scissors').addEventListener("click", pickScissors);
document.getElementById('lizard').addEventListener("click", pickLizard);
//document.getElementById('spock').addEventListener("click", pickScalpellus);

function pickRock() {
  playerChoice = options[0];
  computerChooses();

  if (computerChoice === options[0]) {
    hTwo.innerText = `It is a tie! Computer and player both chose ${computerChoice}.`;
  } else if (computerChoice === options[1]) {
    hTwo.innerText = `The computer wins! The computer chose ${options[1]} and the player chose ${options[0]}.`;
  } else if (computerChoice === options[2]) {
    hTwo.innerText = `The player wins! The computer chose ${options[2]} and the player chose ${options[0]}.`;
  } else if (computerChoice === options[3]) {
    hTwo.innerText = `The player wins! The computer chose ${options[3]} and the player chose ${options[0]}.`;
  } else {
    hTwo.innerText = `The computer wins! The computer chose ${options[4]} and the player chose ${options[0]}.`;
  };
  hOne.appendChild(hTwo);
};

function pickPaper() {
  playerChoice = options[1];
  computerChooses();
   
    if (computerChoice === options[0]) {
      hTwo.innerText = `The player wins! The computer chose ${options[0]} and the player chose ${options[1]}.`;
    } else if (computerChoice === options[1]) {
      hTwo.innerText = `It is a tie! Computer and player both chose ${computerChoice}.`;
    } else if (computerChoice === options[2]) {
      hTwo.innerText = `The computer wins! The computer chose ${options[2]} and the player chose ${options[1]}.`;
    } else if (computerChoice === options[3]) {
      hTwo.innerText = `The player wins! The computer chose ${options[3]} and the player chose ${options[1]}.`;
    } else {
      hTwo.innerText = `The computer wins! The computer chose ${options[4]} and the player chose ${options[1]}.`;
    };
  hOne.appendChild(hTwo);
};
function pickScissors() {
  playerChoice = options[2];
  computerChooses();

  if (computerChoice === options[0]) {
    hTwo.innerText = `The computer wins! The computer chose ${options[0]} and the player chose ${options[2]}.`;
  } else if (computerChoice === options[1]) {
    hTwo.innerText = `The player wins! The computer chose ${options[1]} and the player chose ${options[2]}.`;
  } else if (computerChoice === options[2]) {
    hTwo.innerText = `It is a tie! Computer and player both chose ${computerChoice}.`;
  } else if (computerChoice === options[3]) {
    hTwo.innerText = `The player wins! The computer chose ${options[3]} and the player chose ${options[2]}.`;
  } else {
    hTwo.innerText = `The computer wins! The computer chose ${options[4]} and the player chose ${options[2]}.`;
  };
  hOne.appendChild(hTwo);
};

function pickLizard() {
  playerChoice = options[3];
  computerChooses();

  if (computerChoice === options[0]) {
    hTwo.innerText = `The computer wins! The computer chose ${options[0]} and the player chose ${options[3]}.`;
  } else if (computerChoice === options[1]) {
    hTwo.innerText = `The player wins! The computer chose ${options[1]} and the player chose ${options[3]}.`;
  } else if (computerChoice === options[2]) {
    hTwo.innerText = `It is a tie! Computer and player both chose ${computerChoice}.`;
  } else if (computerChoice === options[3]) {
    hTwo.innerText = `The computer wins! The computer chose ${options[2]} and the player chose ${options[3]}.`;
  } else {
    hTwo.innerText = `The player wins! The computer chose ${options[4]} and the player chose ${options[3]}.`;
  };
  hOne.appendChild(hTwo);
};

const hOne = document.querySelector('h1');
const hTwo = document.createElement('h2');