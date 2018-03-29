var movies = [
  {
    Title: "Iron Man",
    Rating: 5,
    hasWatched: true
  },
  {
    Title: "Thor",
    Rating: 4.5,
    hasWatched: true
  },
  {
    Title: "Black Panther",
    Rating: 4,
    hasWatched: false
  }
];

//You have watched TITLE - RATING
for(var i = 0; i < movies.length; i++){
  if(movies[i].hasWatched == true){
    console.log("You have watched " + movies[i].Title + " - " + movies[i].Rating + " stars");
  }else{
    console.log("You have not watched " + movies[i].Title + " - " + movies[i].Rating + " stars");
  }
}
