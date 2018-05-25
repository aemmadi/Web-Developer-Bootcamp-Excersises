//Clicking on an item adds/removes the strikethrough effect
$('li').click(function (){
  $(this).toggleClass("done");
})

//Clicking on the X fades an item out
$('span').click(function (event){
  $(this).parent().fadeOut(800, function (){
    $(this.remove());
  });
  event.stopPropogation();
})