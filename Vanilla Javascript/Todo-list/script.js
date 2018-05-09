var todos = [];
var input = prompt("What would you like to do?");
while(input !== "quit"){
  if(input == "list"){
    listTodos();
  }else if(input == "new"){
    newTodos();
  }else if(input == "delete"){
    deleteTodos();
  }
  input = prompt("What would you like to do?");
}
console.log("You Quit the APP");
function listTodos(){
  todos.forEach(function(todo, i){
    console.log("**************");
    console.log(i + ": " + todo);
    console.log("**************");
  });
}
function newTodos(){
  var newTodo = prompt("Enter new To-Do");
  todos.push(newTodo);
  console.log("Added Todo");
}
function deleteTodos(){
  var index = prompt("Enter index of the To-Do to delete");
  todos.splice(index, 1);
  console.log("Deleted Todo");
}
