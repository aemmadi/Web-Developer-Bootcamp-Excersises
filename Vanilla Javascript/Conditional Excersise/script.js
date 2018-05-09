var age = prompt("What is your age?");

if(age === -1){
	console.log("ERROR; INVALID AGE");
}
else if(age < 18) {
	console.log("Not old enough to enter");
}
else if(age < 21){
	console.log("You can enter, but can't drink");
}
else{
	console.log("Come on in. You can drink");
}

if(age === 21){
	console.log("Happy 21st birthday!!");
}
if(age % 2 === 1){
	console.log("Your age is odd!");
}
if(age % Math.sqrt(age) == 0){
	console.log("Perfect square!");
}