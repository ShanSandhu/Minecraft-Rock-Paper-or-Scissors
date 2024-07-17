document.addEventListener('DOMContentLoaded', () => {
  const volumeControl = document.getElementById('volume');
  const audio = document.getElementById('background-audio');

  volumeControl.addEventListener('input', (event) => {
      audio.volume = event.target.value;
  });

  function randomInt(max) {
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
      updatePlayerChoiceImage('icons/rocks.png.png');
      game();
  });

  paperButton.addEventListener('click', () => {
      playerChoice = 1;
      updatePlayerChoiceImage('icons/paper.png');
      game();
  });

  scissorsButton.addEventListener('click', () => {
      playerChoice = 2;
      updatePlayerChoiceImage('icons/final.scissors.png');
      game();
  });

  const signElement = document.getElementById('sign');
  const playerChoiceImg = document.getElementById('filler-player');
  const cpuChoiceImg = document.getElementById('filler-cpu');

  function updateSign(message) {
      signElement.innerHTML = message;
  }

  function clearSign() {
      signElement.innerHTML = '';
  }

  function updatePlayerChoiceImage(src) {
      playerChoiceImg.src = src;
  }

  function updateCpuChoiceImage(src) {
      cpuChoiceImg.src = src;
  }

  function game() {
      clearSign();

      if (playerHP <= 0 || cpuHP <= 0) {
          updateSign("Game is over! Resetting...");
          reset();
          return;
      }

      let cpuChoice = randomInt(3);
      let result;

      if (playerChoice === 0) {
          updateSign("You picked Rock!");
      } else if (playerChoice === 1) {
          updateSign("You picked Paper!");
      } else if (playerChoice === 2) {
          updateSign("You picked Scissors!");
      } else {
          updateSign("Invalid result");
      }

      if (cpuChoice === 0) {
          updateSign("CPU picked Rock!");
          updateCpuChoiceImage('icons/rocks.png.png');
      } else if (cpuChoice === 1) {
          updateSign("CPU picked Paper!");
          updateCpuChoiceImage('icons/paper.png');
      } else if (cpuChoice === 2) {
          updateSign("CPU picked Scissors!");
          updateCpuChoiceImage('icons/final.scissors.png');
      }

      if (playerChoice === 0 && cpuChoice === 0) {
          result = "Draw";
      } else if (playerChoice === 1 && cpuChoice === 1) {
          result = "Draw";
      } else if (playerChoice === 2 && cpuChoice === 2) {
          result = "Draw";
      } else if (playerChoice === 0 && cpuChoice === 1) {
          playerHP -= 1;
          result = "CPU wins this round!";
      } else if (playerChoice === 0 && cpuChoice === 2) {
          cpuHP -= 1;
          result = "You win this round!";
      } else if (playerChoice === 1 && cpuChoice === 0) {
          cpuHP -= 1;
          result = "You win this round!";
      } else if (playerChoice === 1 && cpuChoice === 2) {
          playerHP -= 1;
          result = "CPU wins this round!";
      } else if (playerChoice === 2 && cpuChoice === 0) {
          playerHP -= 1;
          result = "CPU wins this round!";
      } else if (playerChoice === 2 && cpuChoice === 1) {
          cpuHP -= 1;
          result = "You win this round!";
      } else {
          result = "Invalid input";
      }

      updateSign(result);
      updateSign(`Player HP: ${playerHP}, CPU HP: ${cpuHP}`);

      if (playerHP <= 0) {
          updateSign("CPU wins the game!");
          return;
      } else if (cpuHP <= 0) {
          updateSign("You win!!");
          return;
      }
  }

  function reset() {
      playerHP = 2;
      cpuHP = 2;
      updateSign("Play again!");
      updatePlayerChoiceImage('icons/blank.png');
      updateCpuChoiceImage('icons/blank.png');
  }
});
