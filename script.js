// Bindings too hold container value
const container = document.getElementById("container");
// Query selector and event listener for #grid size button
document.querySelector("#gridsize").addEventListener("click", resizeGrid);

// Function resize the grid
function resizeGrid(e) {
    let input = prompt("Enter  A Number Between 1 & 100");
    createGrid(input);
}

document.querySelector("#resetgrid").addEventListener("click", resetGrid);

function resetGrid(e) {
    let gridList = Array.from(container.childNodes);
    gridList.forEach((element) => {
    container.removeChild(element);
  });
  createGrid(16);
}

// Function for creating grid
function createGrid(num) {
    // For loop through num
    for (let i = 0; i < num; i++) {
        // Nested for loop through num
        for (let c = 0; c < num; c++) {
            // Create div for cell
            let cell = document.createElement('div');
            // Append cell too container
            container.appendChild(cell).className = "cell";
            container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
            container.style.backgroundColor = "white";
    }
}

};
// Call function
    createGrid(16);

// Console log childNodes

console.log(container.childNodes);

// Event listener too change grid color on mouse hover// Funtion to draw on grid

// Event listener too change grid color on mouse hover

container.addEventListener("mouseover", draw)

// Funtion to draw on grid

function draw(e) {  
    console.log(e);
    
        e.target.style.backgroundColor = "grey";
    }

// Touch start event listener for mobile 

    container.addEventListener("touchmove", draw)

// Function to draw on the grid

function draw(e) {  
    console.log(e);
    
        e.target.style.backgroundColor = "grey";
    }
