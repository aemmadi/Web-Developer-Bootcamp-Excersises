//initialized colors array
var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 250, 0)",
  "rgb(0, 210, 250)",
  "rgb(88, 130, 60)",
  "rgb(172, 130, 40)",
  "rgb(14, 250, 250)",
];

//variable declarations
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var correctColor = colors[3];

colorDisplay.textContent = correctColor;

for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i]; //setting colors to squares
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor; //grabbing the color of the selected square
    if(clickedColor === correctColor){ //comparing with answer
      alert("CORRECT");
    }else{
      this.style.backgroundColor = "#232323";
    }
  });
}
