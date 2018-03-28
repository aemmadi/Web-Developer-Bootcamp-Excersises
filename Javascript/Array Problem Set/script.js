//printReverse() function
function printReverse(array){
  for(var i = array.length - 1; i>= 0; i--){
    console.log(array[i]);
  }
}

//isUniform() function
function isUniform(array){
  var i = 0;
  while(i<array.length){
    if(array[i] == array[i + 1]){
      console.log("true");
      //i++;
    }else{
      console.log("false");
      //i++;
    }
      if(i == array.length - 1 && array[i -1] == array[i]){
      console.log("true");
      break;
    }
    i++;
  }
}

//sumArray() function
function sumArray(array){
  var result = 0;
  for(var i = 0; i < array.length; i++){
    result = result + array[i];
  }
  console.log(result);
}
