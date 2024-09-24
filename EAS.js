const container = document.querySelector(".container");
const resetBtn = document.querySelector("button");


function createGrid(){
    for (let i = 0; i < 256; i ++){
        const div = document.createElement("div");
        container.appendChild(div);
       
    
        div.addEventListener("mouseenter", (e) => {
            div.style.backgroundColor = "red";
        });
    }
}

function resetGrid() {
    const children = document.querySelectorAll(".container *")
    children.forEach(child => {
        child.remove();
   });
   createGrid();
}

resetBtn.addEventListener("click", function (e) {
        resetGrid();
    });


createGrid();





