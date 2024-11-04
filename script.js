let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";

        case 1:
            return "paper";

        case 2:
            return "scissors";
    }
}

function updateUI(playerChoice, computerChoice, roundResult) {
    const playerChoiceUI = document.querySelector("#player-choice");
    const computerChoiceUI = document.querySelector("#computer-choice");
    const resultUI = document.querySelector("#round-result")

    const playerPoints = document.querySelector("#player-points");
    const computerPoints = document.querySelector("#computer-points");

    playerChoiceUI.textContent = `You choose ${playerChoice}`;
    computerChoiceUI.textContent = `Computer choose ${computerChoice}`;
    resultUI.textContent = roundResult;

    playerPoints.textContent = `Player Score: ${humanScore}`;
    computerPoints.textContent = `Computer Score: ${computerScore}`;
}

function checkWinner() {
    
}

function playRound(humanChoice, computerChoice) {
    let roundResult;
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            roundResult = "You win! Rock beats Scissors.";
            humanScore++;
        }

        if (computerChoice === "paper") {
            roundResult = "You loose! Paper beats Rock.";
            computerScore++;
        }
        
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            roundResult = "You win! Paper beats Rock.";
            humanScore++;
        }
        if (computerChoice === "scissors") {
            roundResult = "You loose! Scissors beats Paper";
            computerScore++;
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            roundResult = "You win! Scissors beats Paper";
            humanScore++;
        }
        if (computerChoice === "rock") {
            roundResult = "You loose! Rock beats Scissors";
            computerScore++;
        }
    }

    if (roundResult === undefined) roundResult = "Draw round!"

    updateUI(humanChoice, computerChoice, roundResult);
}

const buttons = document.querySelector("#player-buttons");
buttons.addEventListener('click', (event) => {
    const target = event.target;

    switch(target.id) {
        case "rock":
            playRound("rock", getComputerChoice());
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
    }
});