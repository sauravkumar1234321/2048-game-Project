function Score_class(val) {
    this.value =  val,
    this.name  = "",
    
    this.bestScore = function() {
      var highscore = 0;
      highscore = localStorage.getItem("highscore");
      //localStorage.setItem("highscore", 0);
      if(highscore !== null){
          if (this.value > highscore) {
              localStorage.setItem("highscore", this.value);      
          }
      }
      else{
          localStorage.setItem("highscore", this.value);
      }
    
    
      highscore = +localStorage.getItem("highscore");
      document.getElementById("highscore").innerHTML =  highscore;
      return highscore;
    }
    this.bestScorerName = function(){
     var bestName = " ";
     bestName = localStorage.getItem("bestName");
     if(this.value === this.bestScore()){
          bestName  = this.name;
          localStorage.setItem("bestName", bestName);  
          
      }
    
    
    
      var n = localStorage.getItem("bestName");
      return n;
    
    
    }
};
