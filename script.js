const container = document.getElementById("container");
// variables for rowcell and coll cell
const rowCell = document.getElementsByClassName("rowCell");
const colCell = document.getElementsByClassName("colCell")


// Arrow function for creating grid

const createGrid = num => {
// For loop through num
    for(let i = 0; i < num; i++) {
// Create div for grid row
        let row = document.createElement('div');
// Append row div too container with class name rowCell
        container.appendChild(row).className = "rowCell";
    }
// For loop through length of rowCell
    for(let j = 0; j < rowCell.length; j++) {
// For loop through num
        for(let c = 0; c < num; c++) {
// Create div for cell
            let cell = document.createElement('div');
// Append cell too rowCell index 
            rowCell[j].appendChild(cell).className = "colCell";

        }
    
    }

};

// Call function

createGrid(16);

console.log(container.childNodes);
