'use strict'

const grid = document.querySelector('.grid');
let resetBtn = document.querySelector('.reset');


// CREATE GRID SPECIFYING THE NUMBER OF CELLS

function createGrid(cells) {
    let gridCell;
    for (let i = 0; i < (cells * cells); i++) {
        gridCell = document.createElement('div');
        gridCell.setAttribute('class', 'grid-cell');
        grid.appendChild(gridCell);
    };

    
}

// RESET THE GRID CREATING A NEW BLANK ONE

function resetGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    createGrid(16);
}


createGrid(16);


// ADDED MOUSEOVER TO DRAW

grid.addEventListener('mouseover', (e) => {
    if(e.target.matches('.grid-cell')) {
        e.target.setAttribute('class', 'permahover');
        e.stopPropagation();
    }
});


// ADDED CLICK EVENT ON BUTTON TO RESET GRID

resetBtn.addEventListener('click', () => {
    resetGrid();
});