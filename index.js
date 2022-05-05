'use strict'


const grid = document.querySelector('.grid');
let resetBtn = document.querySelector('.reset');
let slider = document.querySelector('.slider');
let gridSide = slider.value;
let gridPx = document.querySelector('.grid-px');
gridPx.textContent = `${slider.value}px`;


// CREATE GRID SPECIFYING THE NUMBER OF CELLS

function createGrid(cells) {
    let gridCell;
    let side = 500 / cells;
    for (let i = 0; i < (cells * cells); i++) {
        gridCell = document.createElement('div');
        gridCell.style.height = `${side}px`;
        gridCell.style.width = `${side}px`;
        gridCell.setAttribute('class', 'grid-cell');
        grid.appendChild(gridCell);
    };

    
}

// RESET THE GRID CREATING A NEW BLANK ONE

function resetGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    createGrid(gridSide);
}


createGrid(gridSide);


// ADDED MOUSEOVER TO DRAW

grid.addEventListener('mouseover', (e) => {
    if(e.target.matches('.grid-cell')) {
        e.target.style.backgroundColor = '#333';
        e.stopPropagation();
    }
});


// ADDED CLICK EVENT ON BUTTON TO RESET GRID

resetBtn.addEventListener('click', () => {
    resetGrid();
});

slider.addEventListener('change', () => {
    gridSide = slider.value;
    gridPx.textContent = `${slider.value}px`;
    resetGrid();
})