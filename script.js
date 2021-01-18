// Bindings too hold container value
const container = document.getElementById("container");
// Binding to hold chaning num value


// Query selector and event listener for #grid size button
document.querySelector("#gridsize").addEventListener("click", resizeGrid);

function resizeGrid(e) {
    let input = prompt("Enter Number");
    createGrid(input);

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
        }
    }
}
// Call function
    createGrid(16);


// Console log childNodes

console.log(container.childNodes);

// Event listener too change grid color on mouse hover

container.addEventListener("mouseover", draw)

function draw(e) {  
    console.log(e);
    
        e.target.style.backgroundColor = "green";
    }

// Touch start event listener for mobile 

    container.addEventListener("touchstart", draw)

function draw(e) {  
    console.log(e);
    
        e.target.style.backgroundColor = "green";
    }

