const container = document.querySelector(".container");

function createGrid(size) {
    const maxDimension = 900;
    let dimension = maxDimension / size;
    for(i=0; i<size; i++) {
        let row = 'row' + i;
        const newColDiv = document.createElement('div');
        newColDiv.setAttribute('id' , row);
        newColDiv.style.cssText = 'display: flex; height: ' + dimension + 'px';
        container.appendChild(newColDiv);
        for(j=0; j<size; j++) {
            const newRowDiv = document.createElement('div');
            let col = 'col' + j;
            newRowDiv.classList = 'square';
            newRowDiv.setAttribute('id', col);
            newRowDiv.style.cssText = 'background-color: white; width: ' + dimension + 'px';
            newColDiv.appendChild(newRowDiv);
        }
    }
}

const btn = document.querySelector('button');
btn.addEventListener('click' , () => {
    container.innerHTML = '';
    let size = Math.floor(prompt("How many squares on the grid? Max: 150"));
    if(size > 150) {
        size = 150;
    }
    btn.textContent = 'Reset';
    createGrid(size);
    draw();
})

function draw() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover' , (e) => {
            square.style.backgroundColor = 'blue';
        })
    })    
}
