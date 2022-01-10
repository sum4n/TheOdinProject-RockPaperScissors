// Game of Rock Paper Scissors.
let computerScore = 0;
let playerScore = 0;
let gameRound = 1;

// computer selects either rock, paper or scissors.
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissors"];
    return choices[randomIndex];
}

// Asks user for input.
function getPlayerChoice() {
    let playerChoice = prompt("What is your weapon? Rock, Paper or Scissors");
    return playerChoice.toLowerCase();
}

// play single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return "Draw!"
    } else {
        if (playerSelection == "rock") {
            if (computerSelection == "paper") {
                computerScore += 1;
                return "You lose! Paper beats rock.";
            } else {
                playerScore += 1;
                return "You win! Rock beats scissors"
            }
        } else if (playerSelection == "paper") {
            if (computerSelection == "scissors") {
                computerScore += 1;
                return "You lose! Scissors beats paper."
            } else {
                playerScore += 1;
                return "You win! Paper beats rock."
            }
        } else if (playerSelection == "scissors") {
            if (computerSelection == "rock") {
                computerScore += 1;
                return "You lose! Rock beats scissors."
            } else {
                playerScore += 1;
                return "You win! Scissors beat paper."
            }
        }
    }
}


// Play 5 round game. Report winner or looser at the end.
function game() {
    alert("Welcome to Rock Paper Scissors. Choose your weapon wisely!!!")
    while (gameRound <= 5) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice()
        console.log(`Game round: ${gameRound}`);
        console.log(`Player: ${playerSelection} Cpu: ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection));
        gameRound += 1;
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
        // Prints blank line at console after every round.
        console.log();
    }

    printFinalResult();
    // gameRound = 0;

}

// Prints the winner at the end of the game.
function printFinalResult() {
    if (playerScore > computerScore) {
        console.log(`Player wins by ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lose. Computer wins by ${computerScore} to ${playerScore}`)
    } else {
        console.log("Its a draw!");
    }
}

game();
