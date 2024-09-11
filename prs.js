console.log("Hello and Welcome to the Abyss!");

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock") {
      return userInput;
    } else if (userInput === "paper") {
      return userInput;
    } else if (userInput === "scissors") {
      return userInput;
    } else console.log("Invalid selection");
  };
  
  //console.log(getUserChoice("rock"));
  
  const getComputerChoice = () => {
    let compRandom = Math.floor(Math.random() * 3);
    if (compRandom === 0) {
      return "rock";
    } else if (compRandom === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  };
  
  //console.log(getComputerChoice());
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "This game was a tie";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer Wins.";
      } else {
        return "You Win!";
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer Wins.";
      } else {
        return "You Win!";
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer Wins.";
      } else {
        return "You Win!";
      }
    }
  }
  
  function playGame() {
    var userChoice = getUserChoice('Scissors');
    var computerChoice = getComputerChoice();
    console.log('Human: ' + userChoice);
    console.log('Computer: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  