const GRID = document.querySelector("#grid");

for (let i=0; i<625; i++){
    const div = document.createElement("div");
    div.classList.add("square");
    GRID.appendChild(div);
}


const divs = document.querySelectorAll(".square");

divs.forEach(function(square) {
    square.addEventListener('mouseover', function(){
        square.style.backgroundColor = 'black';
    })
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
    divs.forEach(square => {
        square.style.backgroundColor = "white";
    });
});

