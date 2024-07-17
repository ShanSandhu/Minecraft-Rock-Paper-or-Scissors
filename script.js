document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const volumeControl = document.getElementById('volume');

    volumeControl.addEventListener('input', (event) => {
        audio.volume = event.target.value;
    });

   

function randomInt (max) {
    return Math.floor(Math.random() * max);
  }
  
    let playerChoice;
    let playerHP = 2;
    let cpuHP = 2;

    const rockButton = document.getElementById('rock-button');
    const paperButton = document.getElementById('paper-button');
    const scissorsButton = document.getElementById('scissors-button');

    rockButton.addEventListener('click', () => {
        playerChoice = 0;
        game();
    });

    paperButton.addEventListener('click', () => {
        playerChoice = 1;
        game();
    });

    scissorsButton.addEventListener('click', () => {
        playerChoice = 2;
        game();
    });
    

    function game () {

        if (playerHP <= 0 || cpuHP <= 0){
          console.log ("Game is over!")
          console.log ("Resetting.....")
          reset();
          return;
        } 

        let cpuChoice = (randomInt(3));
        let result;


        if (playerChoice === 0){
          console.log("You picked Rock!");
        } else if (playerChoice === 1){
          console.log("You picked Paper!");
        } else if (playerChoice === 2){
          console.log("You picked Scissors!");
        } else {
          console.log("Invalid result");
        }

        if (cpuChoice === 0){
          console.log("CPU picked Rock!");
        } else if (cpuChoice === 1){
          console.log("CPU picked Paper!");
        } else if (cpuChoice === 2){
          console.log("CPU picked Scissors!");
        } 
        
        if (playerChoice === 0 && cpuChoice === 0) {
        result = ("Draw");
      } else if (playerChoice === 1 && cpuChoice === 1) {
        result = ("Draw");
      } else if (playerChoice === 2 && cpuChoice === 2) {
        result = ("Draw");
      } else if (playerChoice === 0 && cpuChoice === 1) {
        playerHP -= 1;
        result = ("CPU wins this round!")
      } else if (playerChoice === 0 && cpuChoice === 2) {
        cpuHP -= 1;
        result = ("You win this round!")
      } else if (playerChoice === 1 && cpuChoice === 0) {
        cpuHP -= 1;
        result = ("You win this round!")
      } else if (playerChoice === 1 && cpuChoice === 2) {
        playerHP -= 1;
        result = ("CPU wins this round!")
      } else if (playerChoice === 2 && cpuChoice === 0) {
        playerHP -= 1;
        result = ("CPU wins this round!")
      } else if (playerChoice === 2 && cpuChoice === 1) {
        cpuHP -= 1;
        result = ("You win this round!")
      } else {
        result = ("Invalid input")
      }

      console.log(result);
      console.log(`Player HP: ${playerHP}, CPU HP: ${cpuHP}`)

      if (playerHP <= 0){
        console.log("CPU wins the game!")
        game();
      } else if (cpuHP <= 0){
        console.log("You win!!")
        game();
      }
  }
    
   function reset () {
      playerHP = 2;
      cpuHP = 2;
      console.log("Play again!");
    }
      
  game();
});
