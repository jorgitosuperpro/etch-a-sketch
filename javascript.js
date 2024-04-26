const GRID = document.querySelector("#grid");
let currentSize = 16; // Number of squares in each side of the grid

select_grid(currentSize);

const button = document.querySelector("button");
button.addEventListener("click", clear_grid);

const changeable_grid = document.querySelector("#change-grid");
changeable_grid.addEventListener("click", () => {
    const newSizeStr = prompt("Please select the size of grid in pixels: (example: 36X36)."); // Cambiado el nombre de la variable size a newSizeStr
    if (newSizeStr <= 100) {
        let newSize;
        if (newSizeStr !== null && newSizeStr !== "") {
            newSize = parseInt(newSizeStr);
            alert("You selected " + newSize + "x" + newSize + " grid.");
            clear_grid();
            select_grid(newSize);
        } else {
            alert("You did not select a grid.")
        }
    
    }
    })
    

function select_grid(size) {
    GRID.innerHTML = ""; // Limpiar GRID antes de agregar nuevos cuadrados
    for (let i = 0; i < (size * size); i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.width = (500 / size) + "px";
        div.style.height = (500 / size) + "px";
        GRID.appendChild(div);  
    }

    const divs = document.querySelectorAll(".square"); // Mover la selección de divs aquí

    // Asignar el evento mouseover a los nuevos cuadrados
    divs.forEach(square => {
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'black';
        })
    });
}

function clear_grid() {
    const divs = document.querySelectorAll(".square");
    divs.forEach(square => {
        square.style.backgroundColor = "white";
    });
}

const colors_blue= document.querySelector("#blue")


// Blue
colors_blue.addEventListener("click", () => {
    clear_grid();
    const divs = document.querySelectorAll(".square")
    divs.forEach(square => {
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'blue';
        })
    });
})

// Red
const colors_red = document.querySelector("#red")
colors_red.addEventListener("click", () => {
    clear_grid();
    const divs = document.querySelectorAll(".square")
    divs.forEach(square => {
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'red';
        })
    });
})

// Green

const colors_green = document.querySelector("#green")
colors_green.addEventListener("click", () => {
    clear_grid();
    const divs = document.querySelectorAll(".square")
    divs.forEach(square => {
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'green';
        })
    });
})

// Black

const colors_black = document.querySelector("#black")
colors_black.addEventListener("click", () => {
    clear_grid();
    const divs = document.querySelectorAll(".square")
    divs.forEach(square => {
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'black';
        })
    });
})