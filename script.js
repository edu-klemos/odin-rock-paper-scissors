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
        humanChoice = prompt("Jankenpon!").toLowerCase();
        if (humanChoice === "paper") {
            return "paper";
        }
        else if (humanChoice === "rock") {
            return "rock";
        }
        else if (humanChoice === "scissors") {
            return "scissors";
        }
        else console.log("Choose between: rock, paper or scissors");

    }
}