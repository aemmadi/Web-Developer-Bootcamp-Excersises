var todos = [];

var input = prompt("What would you like to do?");
while(input !== "quit"){

  if(input == "list"){
    console.log(todos);
  }
  else if(input == "new"){
    var newTodo = prompt("Enter new To-Do");
    todos.unshift(newTodo);
  }
  var input = prompt("What would you like to do?");
}
console.log("You Quit the APP");
