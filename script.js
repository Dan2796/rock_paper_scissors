function getComputerChoice() {
  let random_number = Math.floor(Math.random() * 3);
  switch (random_number) {
    case 0:
      return "rock";
    case 1:
      return "scissors";
    case 2:
      return "paper";
    default:
      return "error"; 
  }
}

function judgeRound(playerSelection, computerSelection){
  switch (true) {
    case playerSelection == computerSelection:
      return "Draw - the computer also picked " + playerSelection;
    case playerSelection == "rock" && computerSelection == "scissors":
      return "You win! Rock beats scissors.";
    case playerSelection == "scissors" && computerSelection == "paper":
      return "You win! Scissors beats paper.";
    case playerSelection == "paper" && computerSelection == "rock":
      return "You win! Paper beats rock.";
    case computerSelection == "rock" && playerSelection == "scissors":
      return "You lose! Rock beats scissors.";
    case computerSelection == "scissors" && playerSelection == "paper":
      return "You lose! Scissors beats paper.";
    case computerSelection == "paper" && playerSelection == "rock":
      return "You lose! Paper beats rock.";
    default:
      return "Hmm, doesn't look like you gave a valid answer." +
             "Try typing 'rock', 'paper' or 'scissors' next time."
  }
}

function playRound() {
  let playerSelection = prompt().toLowerCase().trim();
  let computerSelection = getComputerChoice();
  return judgeRound(playerSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
  console.log(playRound());
}

