function gameManager(N){
  
  grid.init_tile();
  grid.start();
  
  Score.bestScore();
  document.getElementById("bestScorerName").innerHTML = Score.bestScorerName();
  var name = window.prompt("Enter your Name: ");
  alert("                                                 Hey " +name+"! Welcome to the game. \n\nThe rules: Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one! \n\n                                                           Click Ok to continue!\n\n.");
  clock = new timer(new Date());
  Score.name  = name;
  displayThreeTiles();
  document.onkeydown = function(e) {
    e.preventDefault();
    grid.array_init();
    flag = 1;
    displayThreeTiles();
    switch (e.keyCode) {
      case 37:
        grid.left();
        break;
      case 38:
        grid.up();
        break;
      case 39:
        grid.right();
        break;
      case 40:
        grid.down();
        break;
    }

    Score.bestScore();
    document.getElementById("bestScorerName").innerHTML = Score.bestScorerName();
    if(show == 0)
      check();
    
  };
}