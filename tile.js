function Tile(index_row, index_col, value) {

    this.id = index_row+""+index_col;
    this.i = index_row;
    this.j = index_col;
    this.val = value;
    this.Tcolor = function(){return getColor(this.val);}
    this.Tcolor();
  
 }