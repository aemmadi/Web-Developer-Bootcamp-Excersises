//printReverse() function
function printReverse(array){
  for(var i = array.length - 1; i>= 0; i--){
    console.log(array[i]);
  }
}

//isUniform() function 
function isUniform(array){
  var firstElement = array[0];
  var returnLog = "";
  for(var i = 0; i<array.length; i++){
    if(firstElement != array[i]){
      returnLog = "False";
    }else{
      returnLog = "True";
    }
  }
  console.log(returnLog);
}

//sumArray() function
function sumArray(array){
  var result = 0;
  for(var i = 0; i < array.length; i++){
    result = result + array[i];
  }
  console.log(result);
}

//max() function
function max(array){
  var max = 0;
  for(var i = 0; i<array.length; i++){
    if(i<array.length-1){
      if(array[i]>array[i+1] && array[i]>max){
        max = array[i];
      }
    }else{
      if(array[i] > max){
        max = array[i];
      }
    }
  }
  console.log(max);
}
