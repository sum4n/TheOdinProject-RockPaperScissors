// Game of Rock Paper Scissors.
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelector('.buttons');
const choices = document.querySelectorAll("h3");
const results = document.querySelectorAll(".results > p > span");

buttons.addEventListener('click', (event) => {
    let computerChoice = getComputerChoice();
    playRound(event.target.id, computerChoice);
    choices[0].textContent = `Your choice: ${event.target.id}`;
    choices[1].textContent = `Computer choice: ${computerChoice}`;
    printRoundScore();
    printFinalResult();
});

// computer selects either rock, paper or scissors.
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    let itemChoices = ["rock", "paper", "scissors"];
    let cpuChoice = itemChoices[randomIndex];
    console.log(cpuChoice);
    return cpuChoice;
}


// play single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        console.log("Draw");
        return choices[2].textContent = "Draw";
    } else {
        if (playerSelection == "rock") {
            if (computerSelection == "paper") {
                computerScore += 1;
                console.log("You lose! Paper beats rock.")
                return choices[2].textContent = "You lose! Paper beats rock.";
            } else {
                playerScore += 1;
                console.log("You win! Rock beats scissors");
                return choices[2].textContent = "You win! Rock beats scissors";
            }
        } else if (playerSelection == "paper") {
            if (computerSelection == "scissors") {
                computerScore += 1;
                return choices[2].textContent = "You lose! Scissors beats paper."
            } else {
                playerScore += 1;
                return choices[2].textContent = "You win! Paper beats rock."
            }
        } else if (playerSelection == "scissors") {
            if (computerSelection == "rock") {
                computerScore += 1;
                return choices[2].textContent = "You lose! Rock beats scissors."
            } else {
                playerScore += 1;
                return choices[2].textContent = "You win! Scissors beat paper."
            }
        }
    }
}

let printRoundScore = function () {
    results[0].textContent = playerScore;
    results[1].textContent  = computerScore;
}


// Prints the winner at the end of the game.
function printFinalResult() {
    if (playerScore === 5 || computerScore === 5) {
        console.log("Game finished");
        if (playerScore > computerScore) {
            console.log(`Player wins by ${playerScore} to ${computerScore}`);
            results[2].textContent = `Player wins by ${playerScore} to ${computerScore}`;
        } else if (computerScore > playerScore) {
            console.log(`You lose. Computer wins by ${computerScore} to ${playerScore}`)
            results[2].textContent = `You lose. Computer wins by ${computerScore} to ${playerScore}`;
        } else {
            console.log("Its a draw!");
        }
    }
}

