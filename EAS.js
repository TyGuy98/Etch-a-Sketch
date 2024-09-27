const container = document.querySelector(".container");
const resetBtn = document.querySelector("#resetBtn");
const resizeBtn = document.querySelector("#resizeBtn");
const colorSelect = document.getElementById("colorSelect");
let size = 16;
let selectedColor = "black";


function createGrid(){
    const totalDivs = size * size;
    for (let i = 0; i < totalDivs; i ++){
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.flex = `1 0 calc(100% / ${size})`;
        container.appendChild(div);
    }
}

function resetGrid() {
    removeGrid();
    createGrid(size);
}


function resizeGrid(input){
    size = parseInt(input);
    removeGrid();
    createGrid(size);
}

function validateInput(input){
    if (isNaN(input) || input > 100 || input === ""){
        return false;
    }

    return true;
}

function removeGrid(){
    const children = document.querySelectorAll(".container *")
    children.forEach(child => {
        child.remove();
   });
}

const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

container.addEventListener("mouseenter", (e) => {
    if (e.target.classList.contains("grid-item")) {
        let currentOpacity = 1;
        if(e.target.dataset.opacity){
            currentOpacity = parseFloat(e.target.dataset.opacity) - 0.1;

        }
        e.target.dataset.opacity = currentOpacity;
        if (selectedColor === "random"){
            e.target.style.backgroundColor = randomRgbColor();
        }
        else{
            e.target.style.backgroundColor = selectedColor;
        }
        
        e.target.style.opacity = currentOpacity;
    }
    
}, true);

resetBtn.addEventListener("click", function (e) {
        resetGrid();
    });

resizeBtn.addEventListener("click", function (e) {
    let input = "";
    do {
        input =  prompt("Please enter a number (100 max)");

        if (input === null || input.trim() === ""){
            return;
        }

    }while(!(validateInput(input)));


       resizeGrid(input)
    });

colorSelect.addEventListener('change', function(){
    selectedColor = colorSelect.value;

    if (selectedColor === "random") {
        colorSelect.style.border = `5px solid black`;
    } else {
        colorSelect.style.border = `5px solid ${selectedColor}`;
    }
});

createGrid(size);







