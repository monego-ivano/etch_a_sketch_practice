'use strict'

const grid = document.querySelector('.grid');


function createGrid(cells) {
    for (let i = 0; i < (cells * cells); i++) {
        const gridCell = document.createElement('div');
        gridCell.setAttribute('class', 'grid-cell');
        grid.appendChild(gridCell);
    }

    
}




createGrid(16);