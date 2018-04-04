var clickMe = document.getElementById("buttonMe");
console.log(clickMe);

clickMe.addEventListener("click", function(){
  document.body.classList.toggle("purple");
});
