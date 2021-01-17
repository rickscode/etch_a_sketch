// Bindings for grid values
const container = document.getElementById("container");
const rowCell = document.getElementsByClassName("rowCell");
const colCell = document.getElementsByClassName("colCell")


// Arrow function for creating grid

const createGrid = num => {
// For loop through num
        for(let i = 0; i < num; i++) {
// Nested for loop through num
            for(let c = 0; c < num; c++) {
// Create div for cell
                let cell = document.createElement('div');
// Append cell too container
                container.appendChild(cell).className = "cell";
            }
        }
    };
    
// Call function
    createGrid(16);

// Console log childNodes

console.log(container.childNodes);

// Function too change grid color on mouse hover

container.addEventListener("mouseover", draw)

function draw(e) {  
    console.log(e);
    
        e.target.style.backgroundColor = "green";
    }

