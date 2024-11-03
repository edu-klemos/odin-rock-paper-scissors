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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
            return;
        }

        if (computerChoice === "paper") {
            console.log("You loose! Paper beats Rock.");
            computerScore++;
            return;
        }
        
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
            return;
        }
        if (computerChoice === "scissors") {
            console.log("You loose! Scissors beats Paper");
            computerScore++;
            return;
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
            return;
        }
        if (computerChoice === "rock") {
            console.log("You loose! Rock beats Scissors");
            computerScore++;
            return;
        }
    }
    console.log("Draw Round!");
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