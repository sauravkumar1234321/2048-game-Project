function showTime(){
 
    var x = clock.Time_lag();
    var hrs = Math.floor(x/(3600000));
    var min = Math.floor((x - 36000000*Math.floor(x/(3600000)))/(1000*60));
    var sec = Math.floor((x - 36000000*Math.floor(x/(3600000)) - min*1000*60)/1000);
    if(min<10&&hrs<10&&sec<10)
      document.getElementById("Timer").innerHTML = "0" + hrs + " : 0" + min + " : 0" +sec;
    else  if(min<10&&hrs<10)
      document.getElementById("Timer").innerHTML = "0" + hrs + " : 0" + min + " : " +sec;
    else  if(hrs<10)
      document.getElementById("Timer").innerHTML = "0" + hrs + " : " + min + " : " +sec;
    else
      document.getElementById("Timer").innerHTML =  hrs + " : " + min + " : " +sec;
  
  }
  
  
  //This function generates random Id at the beginning of game and at the later stage
  function get_random_Id()
  {	
    let max = N-1;
    let min = 0;
    var i = Math.floor(Math.random()*(max-min+1)+0);;
    var j = Math.floor(Math.random()*(max-min+1)+0);;
    return i+""+j;
  }
  
  function getColor(val)
      {	
          for(var ii = 0;ii<N;ii++)
              for(var jj = 0;jj<N;jj++)
                  if(document.getElementById(ii+""+jj).style.backgroundColor =="rgb(255, 255, 255)")
                      document.getElementById(ii+""+jj).style.backgroundColor = "rgb(200,200,200)";
          
          var color = "rgb(200,200,200)";
      
          if(val == 2)
              color = "#F6CED8";
          else if(val == 4)
              color = "#F7BE81";
          else if(val == 8)
              color = "#BEF781";
          else if(val == 16)
              color = "#BEF781";
          else if(val == 32)
              color = "#006400";
          else if(val == 64)
              color = "#58D3F7";
          else if(val == 128)
              color = "#FA58F4";
          else if(val == 256)
              color = "#A901DB";
          else if(val == 512)
              color = "#01DF3A";
          else if(val == 1024)
              color = "#D7DF01";
          else if(val == 2048)
              color = "#8B0000";
          else
              color = "rgb(200,200,200)";
  
          return color;
      }
  
  
  
  
  
  
  
  function check()
  {
    if(Score.value === Score.bestScore()){
      alert("Congratulation "+ Score.name+"! You have a new high Score");
      show = 1;
    }
  }
    
  
  
  
  function undo()
  {   
      if(flag===0){
          alert("Undo can be done only one time after a move");
          return;
      }
      grid.undo();
      if(document.getElementById(0+""+0).style.opacity !== "1"){
        for(let ii = 0;ii<N;ii++)
          for(let jj = 0;jj<N;jj++)
            document.getElementById(ii+""+jj).style.opacity = "1";
      }
      flag = 0;
  }
  
  function displayThreeTiles(){
      let stringDisp = " "+randomValue[count+1]+'  '+randomValue[count+2]+'  '+randomValue[count+3];
      document.getElementById("nexttiles").innerHTML = stringDisp;
  }