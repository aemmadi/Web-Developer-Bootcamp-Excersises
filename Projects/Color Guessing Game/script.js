//initialized colors array
var colors = randomColorArray(6);

//variable declarations
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var correctColor = randomPickColor();
var h1 = document.querySelector("h1");

colorDisplay.textContent = correctColor;

for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i]; //setting colors to squares
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor; //grabbing the color of the selected square
    if(clickedColor === correctColor){ //comparing with answer
      messageDisplay.textContent = "Correct";
      changeColor(correctColor);
      h1.style.backgroundColor = correctColor;
    }else{
      this.style.backgroundColor = "#232323"; //vanishing the square if its wrong
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColor(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function randomPickColor(){
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

function randomColorArray(num){
  var colorArray = [];
  for (var i = 0; i < num; i++) {
    colorArray.push(randomColor());
  }
  return colorArray;
}

function randomColor(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + "," + " " + green + "," + " " + blue + ")";
}
