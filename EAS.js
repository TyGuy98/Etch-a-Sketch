const container = document.querySelector(".container");



for (let i = 0; i < 256; i ++){
    createGrid();
}

function createGrid(){
    const div = document.createElement("div");
    container.appendChild(div);
}