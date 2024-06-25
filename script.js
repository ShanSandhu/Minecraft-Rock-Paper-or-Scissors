document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const volumeControl = document.getElementById('volume');

    volumeControl.addEventListener('input', (event) => {
        audio.volume = event.target.value;
    });

    document.getElementById('rock-button').addEventListener('click', () => playGame(0));
    document.getElementById('paper-button').addEventListener('click', () => playGame(1));
    document.getElementById('scissors-button').addEventListener('click', () => playGame(2));
});

let pLife = 2;
let sLife = 2;

function getRandomChoice(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choice = getRandomChoice(3);
    if (choice === 0) return "Rock";
    if (choice === 1) return "Paper";
    if (choice === 2) return "Scissors";
}

function getHumanChoice(pChoice) {
    if (pChoice === 0) return "Rock";
    if (pChoice === 1) return "Paper";
    if (pChoice === 2) return "Scissors";
}

function playRound(humanChoice, computerChoice) {
    console.log(`You picked: ${humanChoice}`);
    console.log(`CPU picked: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a DRAW");
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("Steve wins");
        pLife -= 1;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win");
        sLife -= 1;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win");
        sLife -= 1;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("Steve wins");
        pLife -= 1;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("Steve wins");
        pLife -= 1;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win");
        sLife -= 1;
    }

    updateGameState();
}

function playGame(pChoice) {
    if (sLife > 0 && pLife > 0) {
        let humanChoice = getHumanChoice(pChoice);
        let computerChoice = getComputerChoice();
        
        playRound(humanChoice, computerChoice);
    }
}

function updateGameState() {
    console.log(`Player Life: ${pLife}, Steve Life: ${sLife}`);
    
    if (sLife === 0) {
        console.log("Congratulations! You won the game.");
    } else if (pLife === 0) {
        console.log("Game over! Steve won the game.");
    }
}


