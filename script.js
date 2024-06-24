document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const volumeControl = document.getElementById('volume');

    volumeControl.addEventListener('input', (event) => {
        audio.volume = event.target.value;
    });
});


let humanScore = 0;
let computerScore = 0;

function getRandomChoice(max) {
    return Math.floor(Math.random() * max);
}



function getComputerChoice() {
    const choice = getRandomChoice(3);
    if (choice === 0)
        return "Rock";
    if (choice === 1)
        return "Paper";
    if (choice === 2)
        return "Scissors";
}


let pChoice = prompt("0 for Rock, 1 for Paper, and 2 for Scissors: ")

function getHumanChoice() {
    pChoice = Number(pChoice);
    if (pChoice === 0)
        return "Rock";
    if (pChoice === 1)
        return "Paper";
    if (pChoice === 2)
        return "Scissors";

}


function playRound (humanChoice, computerChoice) {
    console.log(`You picked: ${humanChoice}`)
    console.log(`CPU picked: ${computerChoice}`)

    if (humanChoice === computerChoice) {
        console.log("It's a DRAW");
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("CPU wins");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win");
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win");
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("CPU wins");
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("CPU wins");
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win");
    }
}

const playerChoice = getHumanChoice();
const cpuChoice = getComputerChoice();
playRound(playerChoice, cpuChoice);

function playGame() {
    playRound(playerChoice, cpuChoice);

}