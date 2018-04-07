var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 250, 0)",
  "rgb(0, 210, 250)",
  "rgb(88, 130, 60)",
  "rgb(172, 130, 40)",
  "rgb(14, 250, 250)",
];

var squares = document.querySelectorAll(".square");
var correctColor = colors[3];
for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
}
