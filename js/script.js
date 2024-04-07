document.addEventListener("DOMContentLoaded", function() {
    var sudokuGrid = document.querySelector('.sudoku-grid');
    
    for (var i = 0; i < 81; i++) {
      var cell = document.createElement('div');
      cell.classList.add('sudoku-cell');
      sudokuGrid.appendChild(cell);
      
      cell.addEventListener('click', function() {
        this.classList.toggle('selected');
      });
    }
  });
  