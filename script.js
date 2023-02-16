
let container = document.querySelector('#container');
let numberOfSquares = 100;  //  heightAndWidth = 20;  numberOfSquares = (200/heightAndWidth)**2;

function createSquares () {
    for (let i=0; i<numberOfSquares; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

createSquares();

const buttonFive = document.querySelector('#five');
buttonFive.addEventListener("click", () => {
    container.innerHTML = '';
    numberOfSquares = 1600;
    createSquares();
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.height = '3px';
        square.style.width = '3px';
    })
    
})

const buttonTen = document.querySelector('#ten');
buttonTen.addEventListener("click", () => {
    container.innerHTML = '';
    numberOfSquares = 400;
    createSquares();
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.height = '8px';
        square.style.width = '8px';
    })
    
})

const buttonTwenty =  document.querySelector('#twenty');
buttonTwenty.addEventListener("click", () => {
    container.innerHTML = '';
    numberOfSquares = 100;
    createSquares();
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.height = '18px';
        square.style.width = '18px';
    })
    
})

const buttonForty = document.querySelector('#forty');
buttonForty.addEventListener("click", () => {
    container.innerHTML = '';
    numberOfSquares = 25;
    createSquares();
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.height = '38px';
        square.style.width = '38px';
    })
    
})