var guessNumber = prompt("Guess a Number!");
var secretNumber = 8;

if(guessNumber > secretNumber){
	alert("Too High, Try again.");
}
else if(guessNumber < secretNumber){
	alert("Too Low, Try again.");
}
else{
	alert("Nice Guess!! You got it.");
}