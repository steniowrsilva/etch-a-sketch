let container = document.querySelector('#container');
let numberOfSquaresPerSide = 16;  //  heightAndWidth = 20;  numberOfSquares = (320/heightAndWidth)**2;

function createSquares (numberOfSquaresPerSide) {
    for (let i=0; i<numberOfSquaresPerSide**2; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        square.addEventListener('mouseover', (event)=>{
            if (square.classList.contains('rgb')) {
                let r = Math.floor(Math.random()*255);
                let g = Math.floor(Math.random()*255);
                let b = Math.floor(Math.random()*255);
                event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            } else if(square.classList.contains('grey')){
                let startingGreyRGB = 255 / 2;
                if (square.classList.contains('blackSquare')){
                    event.target.classList.remove('blackSquare');
                    event.target.style.backgroundColor = startingGreyRGB;
                }
                if (square.style.backgroundColor) {
                    let currentColor = square.style.backgroundColor;
                    let matches = currentColor.match(/\d+/g);
                    startingGreyRGB = Math.max(...matches); // use the maximum RGB value as the starting grey value
                }
                let newGreyRGB = Math.floor(startingGreyRGB-0.1*(225/2)); // decrease by 10% of rgb(255/2,255/2,255/2)
                event.target.style.backgroundColor = `rgb(${newGreyRGB},${newGreyRGB},${newGreyRGB})`;
            } else if (square.classList.contains('black')) {
                square.style.backgroundColor = '';
                event.target.classList.add('blackSquare');
            } else {
                square.style.backgroundColor = '';
                event.target.classList.add('blackSquare');
            }
        });
    }
    let input = document.querySelector('input')
    let valuesText = document.querySelector('#valuesText');
    valuesText.textContent = input.value;

}

createSquares(numberOfSquaresPerSide);

const chooseGrid = document.querySelector('#chooseGrid');
chooseGrid.addEventListener("click", ()=>{
    numberOfSquaresPerSide = prompt('Number of squares per side:');
    while (numberOfSquaresPerSide>100){
        numberOfSquaresPerSide = prompt('It cannot be greater than 100. Number of squares per side:');
    }
    if (!numberOfSquaresPerSide){
        numberOfSquaresPerSide = 16;
    }
    container.innerHTML = '';
    createSquares(numberOfSquaresPerSide);
    let squares = document.querySelectorAll('.square');
    heightAndWidth = (640/numberOfSquaresPerSide) - 2;
    squares.forEach(square => {
        square.style.height = `${heightAndWidth}px`; 
        square.style.width = `${heightAndWidth}px`;
    })
})

let gridValues = document.querySelector('input');
let valuesText = document.querySelector('#valuesText');
gridValues.addEventListener('input', ()=>{
    numberOfSquaresPerSide = gridValues.value;
    valuesText.textContent = gridValues.value;
    container.innerHTML = '';
    createSquares(numberOfSquaresPerSide);
    let squares = document.querySelectorAll('.square');
    heightAndWidth = (640/numberOfSquaresPerSide) - 2;
    squares.forEach(square => {
        square.style.height = `${heightAndWidth}px`; 
        square.style.width = `${heightAndWidth}px`;
    })
})

const rgbButton = document.querySelector('#rgbButton');
rgbButton.addEventListener('click', () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.classList.add('rgb');
    });
})

const greyButton = document.querySelector('#greyButton');
greyButton.addEventListener("click", () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.classList.remove('rgb');
        square.classList.add('grey');
    });
})

let blackButton = document.querySelector('#blackButton')
blackButton.addEventListener("click", ()=>{
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.classList.remove('rgb');
        square.classList.remove('grey');
        square.classList.add('black');
    });
})

