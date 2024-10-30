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

function getHumanChoice() {
    let humanChoice;
    while (true) {
        humanChoice = prompt("Jankenpon!");
        if (!humanChoice) continue;
        if (humanChoice.toLowerCase() === "paper") {
            return "paper";
        }
        else if (humanChoice.toLowerCase() === "rock") {
            return "rock";
        }
        else if (humanChoice.toLowerCase() === "scissors") {
            return "scissors";
        }
        else console.log("Choose between: rock, paper or scissors");

    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You win!");
    }
    else if (humanScore < computerScore) {
        console.log("Oh no... The computer wins");
    }
    else {
        console.log("It's a draw")
    }
}

playGame();