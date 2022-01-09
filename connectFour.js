var turn = 'red';
var columns = [];
var columnsData = new Array(7);
var rows = [];
var rowsData = new Array(6);
var table = $('table');

for (var i = 0; i < 7; i++) {
  var columnIndex = ".column" + (i+1);
  columns[i] = $(columnIndex);
}

for (var i = 0; i < 6; i++) {
  var rowIndex = ".row" + (i+1) + ">td";
  rows[i] = $(rowIndex);
}

function switchTurn () {
  if (turn == 'red') {
    turn = 'blue';
  }else {
    turn = 'red';
  }
}
function winCheck (turn) {

}

/* hover
$('td').hover(function(){
    if ($(this).css('background-color') != 'rgb(255, 0, 0)' && $(this).css('background-color') != 'rgb(0, 0, 255)') {
      $(this).css("background-color", 'grey');
    }
  },
  function(){
    if ($(this).css('background-color') != 'rgb(255, 0, 0)' && $(this).css('background-color') != 'rgb(0, 0, 255)') {
      $(this).css("background-color", 'white');
    }
  }
)
*/
$('td').click(function(){
  var columnCurrent = this.className;
  var columnIndexCurrent = columnCurrent[columnCurrent.length-1];
  for (var i = 5; i >= 0; i--) {
    console.log(columns[columnIndexCurrent-1][i].style.backgroundColor);
    if (columns[columnIndexCurrent-1][i].style.backgroundColor != 'red' && columns[columnIndexCurrent-1][i].style.backgroundColor != 'blue') {
      columns[columnIndexCurrent-1][i].style.backgroundColor = turn;
      switchTurn();
      break;
    }
  }
  console.log(this);
  //console.log(columns[columnIndexCurrent-1][5]);
  //console.log($('td:first').css("background-color"));
  //console.log(columns[0][0].style.backgroundColor);
})

console.log(table);
