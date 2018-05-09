
//isEven()
console.log("isEven()");

function isEven(num){
  if(num % 2 == 0){
    return true;
  }else {
    return false;
  }
}

//factorial()
console.log("factorial()");

function factorial(num){
  var result = 1;
  for(var i = 2; i <= num; i++){
    result = result * i;
  }
  return result;
}

//kebabToSnake
console.log("kebabToSnake()");

function kebabToSnake(str){
  var snake = str.replace(/-/g, "_");
  return snake;
}
