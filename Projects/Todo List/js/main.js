//Clicking on an item adds/removes the strikethrough effect
$('.content').on("click", "li", function (){
  $(this).toggleClass("done");
})

//Clicking on the X fades an item out
$('.content').on("click", ".del", function (event){
  $(this).parent().fadeOut(800, function (){
    $(this.remove());
  });
  event.stopPropogation; //Stops the events from affecting the whole parent element (ripple effect)
})

//Hitting enter adds a new Todo item
$('.textfield').on("keypress", function (event){
  if(event.which == 13){
    var input = $(this).val();
    $('ul').append('<li><span class="del">X</span> ' + input + '</li>');
  }
})