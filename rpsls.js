const options = ["rock", "paper", "scissors", "lizard", "Spock"];
let playerChoice = "";
let computerChoice = "";
const spock = "url('https://www.startrek.com/sites/default/files/styles/1200x628/public/images/2019-07/8b10a9280bd46b8874af9b5cadec91d5.jpg?itok=iCDluTt7')";

function computerChooses() {
  computerChoice = options[Math.floor(Math.random()*5)]
};

document.getElementById('rock').addEventListener("click", pickRock);
document.getElementById('paper').addEventListener("click", pickPaper);
document.getElementById('scissors').addEventListener("click", pickScissors);
document.getElementById('lizard').addEventListener("click", pickLizard);
document.getElementById('spock').addEventListener("click", pickSpock);

function pickRock() {
  document.querySelector('body').style.backgroundImage = "url('https://miro.medium.com/max/4514/1*eyuCr9KOhADGM7V4-4Mt8Q.jpeg')";
  playerChoice = options[0];
  computerChooses();

  if (computerChoice === options[0]) {
    hTwo.innerText = `It is a tie! Computer and player both chose ${computerChoice}.`;
  } else if (computerChoice === options[1]) {
    hTwo.innerText = `The computer wins! ${options[1]} covers ${options[0]}.`;
  } else if (computerChoice === options[2]) {
    hTwo.innerText = `The player wins! ${options[0]} crushes ${options[2]}.`;
  } else if (computerChoice === options[3]) {
    hTwo.innerText = `The player wins! ${options[0]} crushes ${options[3]}.`;
  } else {
    hTwo.innerText = `The computer wins! ${options[4]} vaporizes ${options[0]}.`;
  };
  hOne.appendChild(hTwo);
};

function pickPaper() {
  document.querySelector('body').style.backgroundImage = "url('https://miro.medium.com/max/4514/1*eyuCr9KOhADGM7V4-4Mt8Q.jpeg')";
  playerChoice = options[1];
  computerChooses();
   
    if (computerChoice === options[0]) {
      hTwo.innerText = `The player wins! ${options[1]} covers ${options[0]}.`;
    } else if (computerChoice === options[1]) {
      hTwo.innerText = `It is a tie! Computer and player both chose ${computerChoice}.`;
    } else if (computerChoice === options[2]) {
      hTwo.innerText = `The computer wins! ${options[2]} cuts ${options[1]}.`;
    } else if (computerChoice === options[3]) {
      hTwo.innerText = `The computer wins! ${options[3]} eats ${options[1]}.`;
    } else {
      hTwo.innerText = `The player wins! ${options[1]} disproves ${options[4]}.`;
    };
  hOne.appendChild(hTwo);
};
function pickScissors() {
  document.querySelector('body').style.backgroundImage = "url('https://miro.medium.com/max/4514/1*eyuCr9KOhADGM7V4-4Mt8Q.jpeg')";
  playerChoice = options[2];
  computerChooses();

  if (computerChoice === options[0]) {
    hTwo.innerText = `The computer wins! ${options[0]} crushes ${options[2]}.`;
  } else if (computerChoice === options[1]) {
    hTwo.innerText = `The player wins! ${options[2]} cuts ${options[1]}.`;
  } else if (computerChoice === options[2]) {
    hTwo.innerText = `It is a tie! Computer and player both chose ${computerChoice}.`;
  } else if (computerChoice === options[3]) {
    hTwo.innerText = `The player wins! ${options[2]} decapitates ${options[3]}.`;
  } else {
    hTwo.innerText = `The computer wins! ${options[4]} smashes ${options[2]}.`;
  };
  hOne.appendChild(hTwo);
};

function pickLizard() {
  document.querySelector('body').style.backgroundImage = "url('https://miro.medium.com/max/4514/1*eyuCr9KOhADGM7V4-4Mt8Q.jpeg')";
  playerChoice = options[3];
  computerChooses();

  if (computerChoice === options[0]) {
    hTwo.innerText = `The computer wins! ${options[0]} crushes ${options[3]}.`;
  } else if (computerChoice === options[1]) {
    hTwo.innerText = `The player wins! ${options[3]} eats ${options[1]}.`;
  } else if (computerChoice === options[2]) {
    hTwo.innerText = `The computer wins! ${options[2]} decapitates ${options[3]}.`;
  } else if (computerChoice === options[3]) {
    hTwo.innerText = `It is a tie! Computer and player both chose ${computerChoice}.`;
  } else {
    hTwo.innerText = `The player wins! ${options[3]} poisons ${options[4]}.`;
  };
  hOne.appendChild(hTwo);
};

function pickSpock() {
  document.querySelector('body').style.backgroundImage = "url('https://miro.medium.com/max/4514/1*eyuCr9KOhADGM7V4-4Mt8Q.jpeg')";
  playerChoice = options[4];
  computerChooses();

  if (computerChoice === options[0]) {
    hTwo.innerText = `The player wins! ${options[4]} vaporizes ${options[0]}.`;
  } else if (computerChoice === options[1]) {
    hTwo.innerText = `The computer wins! ${options[1]} disproves ${options[4]}.`;
  } else if (computerChoice === options[2]) {
    hTwo.innerText = `The player wins! ${options[4]} smashes ${options[2]}.`;
  } else if (computerChoice === options[3]) {
    hTwo.innerText = `The computer wins! ${options[3]} poisons ${options[4]}.`;
  } else {
    hTwo.innerText = `It is a tie! Computer and player both chose ${computerChoice}.`;
    document.querySelector('body').style.backgroundImage = spock;
  };
  hOne.appendChild(hTwo);
};

const hOne = document.querySelector('h1');
const hTwo = document.createElement('h2');