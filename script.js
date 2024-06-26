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

function playGame(pChoice, computerChoice) {
    if (sLife > 0 && pLife > 0) {
        let humanChoice = getHumanChoice(pChoice);
        let computerChoice = getComputerChoice();
        
        let pChoiceImg = document.querySelector('.p-choice img');
        if (humanChoice === "Rock") {
            pChoiceImg.src = "icons/rocks.png.png";
        } else if (humanChoice === "Paper") {
            pChoiceImg.src = "icons/paper.png";
        } else if (humanChoice === "Scissors") {
            pChoiceImg.src = "icons/final.scissors.png";
        }

        let computerChoiceImg = document.querySelector('.cpu-choice img');
        if (computerChoice === "Rock") {
            computerChoiceImg.src = "icons/rocks.png.png";
        } else if (humanChoice === "Paper") {
            computerChoiceImg.src = "icons/paper.png";
        } else if (humanChoice === "Scissors") {
            computerChoiceImg.src = "icons/final.scissors.png";
        }
        
        playRound(humanChoice, computerChoice);
    }
}

function updateGameState(resultMessage) {
    console.log(`Player Life: ${pLife}, Steve Life: ${sLife}`);

     
    let signElement = document.querySelector('.sign');
    signElement.textContent = `${resultMessage} | Player Life: ${pLife} - Steve Life: ${sLife}`;

    if (sLife === 0) {
        console.log("Congratulations! You won the game.");
        setTimeout(restartGame, 2000);
    } else if (pLife === 0) {
        console.log("Game over! Steve won the game.");
        setTimeout(restartGame, 2000);
    }

    
    if (sLife === 0) {
        console.log("Congratulations! You won the game.");
    } else if (pLife === 0) {
        console.log("Game over! Steve won the game.");
    }
}

function restartGame() {
    pLife = 2;
    sLife = 2;
    console.log("Game restarted.");

    document.querySelector('.p-choice img').src = "icons/blank.png";
    document.querySelector('.cpu-choice img').src = "icons/blank.png";
    document.querySelector('.sign').textContent = "Rock, Paper, or Scissors?";
}
