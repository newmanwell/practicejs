let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

//console.log(generateTarget());

const compareGuesses = (human, computer, random) => {
  let humanGuess = Math.abs(random - human);
  let computerGuess = Math.abs(random - computer)
  if (human > 9) {
    alert('Enter a number from 0 to 9');
  }
  if (humanGuess <= computerGuess) {
    return true;
  } else {
    return false;
  } 
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}


