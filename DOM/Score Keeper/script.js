var playerOne = document.querySelector("#playerOne");
var playerTwo = document.querySelector("#playerTwo");
var reset = document.querySelector("#reset");
var playingTo = document.querySelector("#playingTo");
var playerOne_output = document.querySelector("#playerOne_output");
var playerTwo_output = document.querySelector("#playerTwo_output");
var numInput = document.querySelector("input");
var playerOne_score = 0;
var playerTwo_score = 0;
var gameOver = false;

playerOne.addEventListener("click", function(){
  if(!gameOver){
    playerOne_score++;
    if(playerOne_score == playingTo.textContent){
      playerOne_output.classList.add("winner");
      gameOver = true;
    }
    playerOne_output.textContent = playerOne_score;
  }
});

playerTwo.addEventListener("click", function(){
  if(!gameOver){
    playerTwo_score++;
    if(playerTwo_score == playingTo.textContent){
      playerTwo_output.classList.add("winner");
      gameOver = true;
    }
    playerTwo_output.textContent = playerTwo_score;
  }
});

reset.addEventListener("click", function(){
resetDisplay();
});

function resetDisplay(){
  gameOver = false;
  playerOne_score = 0;
  playerOne_output.textContent = "0";
  playerOne_output.classList.remove("winner");
  playerTwo_score = 0;
  playerTwo_output.textContent = "0";
  playerTwo_output.classList.remove("winner");
}

numInput.addEventListener("change", function(){
  playingTo.textContent = Number(numInput.value);
  resetDisplay();
});
