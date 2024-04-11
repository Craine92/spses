const computerDisplay = document.getElementById("computer-choice");

const playerDisplay = document.getElementById("player-choice");

const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => {
    possibleChoice.addEventListener("click", (e) => {
        userChoice = e.target.id;
        playerDisplay.innerHTML = userChoice;
        generateComputerChoice()
        getResult()
    });
});

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    

    switch (randomNumber) {
        case 0:
            computerChoice = "schere";
            break;
        case 1:
            computerChoice = "stein";
            break;
        case 2:
            computerChoice = "papier";
            break;
        case 3:
            computerChoice = "echse";
            break;
        case 4:
            computerChoice = "spock";
            break;
        default:
            break;
    }

    computerDisplay.innerHTML = computerChoice;
};

function getResult() {
    if (computerChoice === userChoice) {
        resultDisplay.innerHTML = "Unentschieden"; 
    } else if ((computerChoice === "schere" && (userChoice === "papier" || userChoice === "echse")) ||
               (computerChoice === "papier" && (userChoice === "stein" || userChoice === "spock")) ||
               (computerChoice === "stein" && (userChoice === "schere" || userChoice === "echse")) ||
               (computerChoice === "echse" && (userChoice === "papier" || userChoice === "spock")) ||
               (computerChoice === "spock" && (userChoice === "schere" || userChoice === "stein"))) {
        resultDisplay.innerHTML = "Computer gewinnt!";
    } else {
        resultDisplay.innerHTML = "Spieler gewinnt!";
    }
};
