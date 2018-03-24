var set = prompt("Choose Problem");

if(set == 1){
	var num = -10;
	while(num <=19){
		console.log(num);
		num++;
	}
}
else if(set == 2){
	var num = 10;
	while(num <=40){
		if(num % 2 == 0){
			console.log(num);
			num++;
		}
		else {
			num++;
		}
	}
}
else if(set == 3){
	var num = 300;
	while(num <= 333){
		if(num % 2 == 1){
			console.log(num);
			num++;
		}
		else{
			num++;
		}
	}
}
else{
	var num = 5;
	while(num <= 50){
		if(num % 5 == 0 && num % 3 == 0){
			console.log(num);
			num++;
		}
		else{
			num++;
		}
	}
}