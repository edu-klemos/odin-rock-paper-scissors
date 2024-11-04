const humanScoreCounter = (function() {
    let humanScore = 0;

    return (win = false) => win ? ++humanScore : humanScore;

})();

const computerScoreCounter = (function() {
    let computerScore = 0;

    return (win = false) => win ? ++computerScore : computerScore;

})();

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

function updateUI(playerChoice, computerChoice, roundResult, humanScore, computerScore) {
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
    let humanScore = humanScoreCounter();
    let computerScore = computerScoreCounter();

    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            roundResult = "You win! Rock beats Scissors.";
            humanScore = humanScoreCounter(win = true);
        }

        if (computerChoice === "paper") {
            roundResult = "You loose! Paper beats Rock.";
            computerScore = computerScoreCounter(win = true);
        }
        
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            roundResult = "You win! Paper beats Rock.";
            humanScore = humanScoreCounter(win = true);
        }
        if (computerChoice === "scissors") {
            roundResult = "You loose! Scissors beats Paper";
            computerScore = computerScoreCounter(win = true);
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            roundResult = "You win! Scissors beats Paper";
            humanScore = humanScoreCounter(win = true);
        }
        if (computerChoice === "rock") {
            roundResult = "You loose! Rock beats Scissors";
            computerScore = computerScoreCounter(win = true);
        }
    }

    if (roundResult === undefined) roundResult = "Draw round!"

    updateUI(humanChoice, computerChoice, roundResult, humanScore, computerScore);
    checkWinner();
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