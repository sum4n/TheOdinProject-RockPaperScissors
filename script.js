// Game of Rock Paper Scissors.
let computerScore = 3;
let playerScore = 3;

const buttons = document.querySelectorAll('button');
const buttonsDiv = document.querySelector('.buttons');
const choices = document.querySelectorAll('.choices > p > span');
const roundResult = document.querySelector('.round-result > span');
const scores = document.querySelectorAll('.scores > p > span');
const winner = document.querySelector('#winner');

buttons.forEach(buttonActive);

function buttonActive(button) {
    // if (button.id == "rock") return;
    //console.log("button " + button.id);
    button.addEventListener('click', () => {
        playGame(button);
    });
}

function playGame(button) {
    // console.log(playerScore,  computerScore);
    if (computerScore < 5 && playerScore < 5) {
        let playerChoice = button.id;
        // console.log(playerChoice);
        let computerChoice = getComputerChoice();
        choices[0].textContent = playerChoice;
        choices[1].textContent = computerChoice;
        playRound(playerChoice, computerChoice);
        printScores();
        printFinalResult();
    }
    
} 

function printScores() {
    scores[0].textContent = playerScore;
    scores[1].textContent = computerScore;
}

// computer selects either rock, paper or scissors.
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    let itemChoices = ["rock", "paper", "scissors"];
    let cpuChoice = itemChoices[randomIndex];
    // console.log(cpuChoice);
    return cpuChoice;
}


// play single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        // console.log("Draw");
        return roundResult.textContent = "Draw";
    } else {
        if (playerSelection == "rock") {
            if (computerSelection == "paper") {
                computerScore += 1;
                // console.log("You lose! Paper beats rock.")
                return roundResult.textContent = "You lose! Paper beats rock.";
            } else {
                playerScore += 1;
                // console.log("You win! Rock beats scissors");
                return roundResult.textContent = "You win! Rock beats scissors";
            }
        } else if (playerSelection == "paper") {
            if (computerSelection == "scissors") {
                computerScore += 1;
                return roundResult.textContent = "You lose! Scissors beats paper."
            } else {
                playerScore += 1;
                return roundResult.textContent = "You win! Paper beats rock."
            }
        } else if (playerSelection == "scissors") {
            if (computerSelection == "rock") {
                computerScore += 1;
                return roundResult.textContent = "You lose! Rock beats scissors."
            } else {
                playerScore += 1;
                return roundResult.textContent = "You win! Scissors beat paper."
            }
        }
    }
}



// Prints the winner at the end of the game.
function printFinalResult() {
    if (playerScore === 5 || computerScore === 5) {
        // console.log("Game finished");
        if (playerScore > computerScore) {
            // console.log(`Player wins by ${playerScore} to ${computerScore}`);
            winner.textContent = `Player wins by ${playerScore} to ${computerScore}`;
        } else if (computerScore > playerScore) {
            // console.log(`You lose. Computer wins by ${computerScore} to ${playerScore}`)
            winner.textContent = `You lose. Computer wins by ${computerScore} to ${playerScore}`;
        } else {
            // console.log("Its a draw!");
        }
        addNewButton();
    }
}


const startNewGameButton = document.createElement('button');

function addNewButton() {
    startNewGameButton.textContent = "Start New Game";

    buttonsDiv.appendChild(startNewGameButton);
}

startNewGameButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    choices[0].textContent = "";
    choices[1].textContent = "";
    scores[0].textContent = "";
    scores[1].textContent = "";
    winner.textContent = "";
    roundResult.textContent = "";
    buttonsDiv.removeChild(startNewGameButton);
})
