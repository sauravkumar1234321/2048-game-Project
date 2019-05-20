function Grid(N) {

    this.array = [];
    this.size = N;
    this.init_tile = function(){
  
      for(let i = 0; i < N; i++)
      {
        this.array.push([]);
      }
      for(let i = 0; i < N;i++)
        for(let j = 0; j < N; j++)
          this.array[i].push(0);
      
      this.cell = [];
  
      for(let i = 0; i < N; i++)
      {
        this.cell.push([]);
      }
      
      }
    this.start = function() 
    { 
      for(let i = 0; i < N;i++)
        for(let j = 0; j < N; j++)
          this.array[i][j] = 0;
      let html = '<table border="9">';
      for(let row=0;row<N;row++) {
        html += '<tr>';
        for(let col=0;col<N;col++) {
          let id = row+""+col;
          html += '<td style="border-bottom-style: solid; 10pt solid black; "  align="center" valign="center" height="95" color="#D3D3D3" width="95" id="'+id+'"></td>';
        }
        html += '</tr>';
      }
      html += '</table>';
      document.getElementById("canvas").innerHTML = html;
      
      let id1 = get_random_Id();
      let id2 = "";
      while(true) {
        id2 = get_random_Id();
        if(id1 != id2)
        break;
      }
      for(let i = 0; i < N;i++)
        for(let j = 0; j < N; j++)
          this.cell[i].push(new Tile(i,j,this.array[i][j]));
      
      var arr = id1.split("");
      this.array[parseInt(arr[0])][parseInt(arr[1])] = 2;
      this.cell[parseInt(arr[0])][parseInt(arr[1])].val = 2;
      this.cell[parseInt(arr[0])][parseInt(arr[1])].Tcolor();
      
      arr = id2.split("");
      this.array[parseInt(arr[0])][parseInt(arr[1])] = 2;
      this.cell[parseInt(arr[0])][parseInt(arr[1])].val = 2;
      this.cell[parseInt(arr[0])][parseInt(arr[1])].Tcolor();
          
      
      //Set initial 2 values
      document.getElementById(id1).innerHTML = "2";
      document.getElementById(id2).innerHTML = "2";
      for(let ii = 0;ii<N;ii++){
        for(let jj = 0;jj<N;jj++){
          document.getElementById(ii+""+jj).style.backgroundColor = getColor(-1);
          document.getElementById(ii+""+jj).style.color = "rgb(100,10,100)";
          document.getElementById(ii+""+jj).style.fontSizeAdjust = "1.4";
          document.getElementById(ii+""+jj).style.fontWeight = "550"; 
         
        }
      }
      document.getElementById(id1).style.backgroundColor = getColor(2);
      document.getElementById(id2).style.backgroundColor = getColor(2);
      
      Score.value = 0;
      document.getElementById("Score.value").innerHTML = Score.value;
  
      for(let i = 0;i < 10000; i++)
      randomValue.push(Math.random() < 0.7 ? 2 : 4);
      
      return false;
    }
   
    
  
    this.checkGameOver = function(){
  
      var isOver = true;
          for(var j=0;j<=N-1;j++) {
              for(var i=0;i<=(N-1-1);i++) {
                  //alert(i+" "+j);
                  var val = parseInt(document.getElementById(i+""+j).innerHTML);
                  var nVal = parseInt(document.getElementById((i+1)+""+j).innerHTML);
                  if(val == nVal) {
                      isOver = false;
                      break;
                  }
              }
          }		
          if(isOver == true) {
              for(var i=0;i<=N-1;i++) {
                  for(var j=0;j<=(N-1-1);j++) {
                      //alert(i+" "+j);
                      var val = parseInt(document.getElementById(i+""+j).innerHTML);
                      var nVal = parseInt(document.getElementById(i+""+(j+1)).innerHTML);
                      if(val == nVal) {
                          isOver = false;
                          break;
                      }
                  }
              }
          }
          if(isOver) {
        for(let ii = 0; ii < N; ii++){
          for(let jj = 0; jj < N; jj++){
            document.getElementById(ii+""+jj).style.opacity = "0.3";
          }
        }
              alert("Game over!");
          }
          return false;
    }
  
  
    this.update  = function(){
      
        var ids = [];
        for(var i=0;i<=N-1;i++) {
          for(var j=0;j<=N-1;j++) {
            var id = i+""+j;
            if(document.getElementById(id).innerHTML == "") {
              ids.push(id);
            }
          }
        }
        var id = ids[Math.floor(Math.random()*ids.length)];
        
        document.getElementById(id).innerHTML = randomValue[count].toString();
        document.getElementById(id).style.backgroundColor = getColor(randomValue[count++]);
        //Check if no move space available
        var allFilled = true;
        for(var i=0;i<=N-1;i++) {
          for(var j=0;j<=N-1;j++) {
            var id = i+""+j;
            if(document.getElementById(id).innerHTML == "") {
              allFilled = false;
              break;
            }
          }
        }		
        for(let i = 0; i<N; i++)
        for(let j = 0;j<N; j++)
          if(parseInt(document.getElementById(i+""+j).innerHTML) === MAX_VAL)
            alert("Congrats, You won!");
        //Update Score.value
        document.getElementById("Score.value").innerHTML = Score.value;
        if(allFilled) {
          this.checkGameOver();
        }
  
      }
  
  
        this.up = function() {
          isMoved = false;
          excludeIds = [];
          for(var j=0;j<=N-1;j++) {
            for(var i=0;i<=N-1;i++) {
              var id = i+""+j;
              if(document.getElementById(id).innerHTML != "") {
                this.moveUp(id);
              }
            }
          }
          if(isMoved == true) {
            this.update();
          }
          return false;
        }
        this.moveUp = function(id) {		
          if(!id.startsWith(0)) {
            var arr = id.split("");
            var i = parseInt(arr[0]);
            var j = parseInt(arr[1]);
            for(var k=(i-1);k>=0;k--) {
              var nId = k+""+j;
              if(document.getElementById(nId).innerHTML != "") {
                var val = parseInt(document.getElementById((k+1)+""+j).innerHTML);
                var nVal = parseInt(document.getElementById(nId).innerHTML);
                if(val == nVal) {
                  if(excludeIds.indexOf(nId) == -1){
                    excludeIds.push(nId);
                    document.getElementById(nId).innerHTML = (val+nVal);
                    document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
                    document.getElementById((k+1)+""+j).innerHTML = "";
                    document.getElementById((k+1)+""+j).style.backgroundColor = "#ffffff";
                    isMoved = true;
                    Score.value += (val+nVal);
                  }
                  break;
                }
              }
              else {
                document.getElementById(nId).innerHTML = document.getElementById((k+1)+""+j).innerHTML;
                document.getElementById(nId).style.backgroundColor = document.getElementById((k+1)+""+j).style.backgroundColor;
                
                document.getElementById((k+1)+""+j).innerHTML = "";
                document.getElementById((k+1)+""+j).style.backgroundColor = "#ffffff";
                isMoved = true;
              }
            }
          }
          return false;
        }
        this.left = function() {
          isMoved = false;
          excludeIds = [];
          for(var i=0;i<=N-1;i++) {
            for(var j=0;j<=N-1;j++) {
              var id = i+""+j;
              if(document.getElementById(id).innerHTML != "") {
                this.moveLeft(id);
              }
            }
          }
          if(isMoved == true) {
            this.update();
          }
          return false;
        }
        this.moveLeft = function(id) {
          if(!id.endsWith(0)) {
            var arr = id.split("");
            var i = parseInt(arr[0]);
            var j = parseInt(arr[1]);
            for(var k=(j-1);k>=0;k--) {
              var nId = i+""+k;
              if(document.getElementById(nId).innerHTML != "") {
                var val = parseInt(document.getElementById(i+""+(k+1)).innerHTML);
                var nVal = parseInt(document.getElementById(nId).innerHTML);
                if(val == nVal) {
                  if(excludeIds.indexOf(nId) == -1){
                    excludeIds.push(nId);
                    document.getElementById(nId).innerHTML = (val+nVal);
                    document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
                    document.getElementById(i+""+(k+1)).innerHTML = "";
                    document.getElementById(i+""+(k+1)).style.backgroundColor = "#ffffff";
                    isMoved = true;
                    Score.value += (val+nVal);
                  }
                  break;
                }
              }
              else {
                document.getElementById(nId).innerHTML = document.getElementById(i+""+(k+1)).innerHTML;
                document.getElementById(nId).style.backgroundColor = document.getElementById(i+""+(k+1)).style.backgroundColor;
                document.getElementById(i+""+(k+1)).innerHTML = "";
                document.getElementById(i+""+(k+1)).style.backgroundColor = "#ffffff";
                isMoved = true;
              }
            }
          }
          return false;
        }
        this.down = function() {
          isMoved = false;
          excludeIds = [];
          for(var i=0;i<=N-1;i++) {
            for(var j=N-1;j>=0;j--) {
              var id = j+""+i;
              if(document.getElementById(id).innerHTML != "") {
                this.moveDown(id);
              }
            }
          }
          if(isMoved == true) {
            this.update();
          }
          return false;
        }
        this.moveDown = function(id)  {
          if(!id.startsWith(N-1)) {
            var arr = id.split("");
            var i = parseInt(arr[0]);
            var j = parseInt(arr[1]);
            for(var k=(i+1);k<=N-1;k++) {
              var nId = k+""+j;
              if(document.getElementById(nId).innerHTML != "") {
                var val = parseInt(document.getElementById((k-1)+""+j).innerHTML);
                var nVal = parseInt(document.getElementById(nId).innerHTML);
                if(val == nVal) {
                  if(excludeIds.indexOf(nId) == -1){
                    excludeIds.push(nId);
                    document.getElementById(nId).innerHTML = (val+nVal);
                    document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
                    document.getElementById((k-1)+""+j).innerHTML = "";
                    document.getElementById((k-1)+""+j).style.backgroundColor = "#ffffff";
                    isMoved = true;
                    Score.value += (val+nVal);
                  }
                  break;
                }
              }
              else {
                document.getElementById(nId).innerHTML = document.getElementById((k-1)+""+j).innerHTML;
                document.getElementById(nId).style.backgroundColor = document.getElementById((k-1)+""+j).style.backgroundColor;
                document.getElementById((k-1)+""+j).innerHTML = "";
                document.getElementById((k-1)+""+j).style.backgroundColor = "#ffffff";
                isMoved = true;
              }
            }
          }
          return false;
        }
        this.right = function() {
          isMoved = false;
          excludeIds = [];
          for(var i=0;i<=N-1;i++) {
            for(var j=N-1;j>=0;j--) {
              var id = i+""+j;
              if(document.getElementById(id).innerHTML != "") {
                this.moveRight(id);
              }
            }
          }
          if(isMoved == true) {
            this.update();
          }
          return false;
        }
        this.moveRight = function(id)  {
          if(!id.endsWith(N-1)) {
            var arr = id.split("");
            var i = parseInt(arr[0]);
            var j = parseInt(arr[1]);
            for(var k=(j+1);k<=N-1;k++) {
              var nId = i+""+k;
              if(document.getElementById(nId).innerHTML != "") {
                var val = parseInt(document.getElementById(i+""+(k-1)).innerHTML);
                var nVal = parseInt(document.getElementById(nId).innerHTML);
                if(val == nVal) {
                  if(excludeIds.indexOf(nId) == -1){
                    excludeIds.push(nId);
                    document.getElementById(nId).innerHTML = (val+nVal);
                    document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
                    document.getElementById(i+""+(k-1)).innerHTML = "";
                    document.getElementById(i+""+(k-1)).style.backgroundColor = "#ffffff";
                    isMoved = true;
                    Score.value += (val+nVal);
                  }
                  break;
                }
              }
              else {
                document.getElementById(nId).innerHTML = document.getElementById(i+""+(k-1)).innerHTML;
                document.getElementById(nId).style.backgroundColor = document.getElementById(i+""+(k-1)).style.backgroundColor;
                document.getElementById(i+""+(k-1)).innerHTML = "";
                document.getElementById(i+""+(k-1)).style.backgroundColor = "#ffffff";
                isMoved = true;
              }
            }
          }
          return false;
        }
  
      this.array_init = function()
      {
        for(let ii = 0; ii < N; ii++)
          for(let jj = 0; jj < N; jj++)
            this.array[ii][jj] =  document.getElementById(ii+""+jj).innerHTML;
      }
      
      this.undo = function()
      {
        for(let ii = 0; ii < N; ii++){
          for(let jj = 0; jj < N; jj++){
          document.getElementById(ii+""+jj).innerHTML = this.array[ii][jj];
          document.getElementById(ii+""+jj).style.backgroundColor = getColor(parseInt(this.array[ii][jj]));
          }
        }
      }
    };
  