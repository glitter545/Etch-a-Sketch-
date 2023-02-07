let num;
document.body.style.backgroundColor = "antiquewhite";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

changeGrid(16);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function changeColor(e) {
   if(e.type === "mouseover" && !mouseDown) {
    return
   } else {
    e.target.style.backgroundColor = "green";
   }
}

const change = document.querySelectorAll("button")[0];

change.addEventListener("click",ask);

function remove() {
    //live collection 
    const old = document.getElementsByClassName("grid-item");
    const oldCopy = [...old];
    for(let i=0; i < oldCopy.length; i++) {
        oldCopy[i].remove();
    }
}

function changeGrid(newNum) {
    num = newNum;
remove();
    //check if grid-item already exists

    const grid = document.getElementById("grid");
    grid.style.width = "400px";
    grid.style.height = "400px";
    grid.style.border = "2px solid blue";
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${num},1fr)`;
    grid.style.gridTemplateRows = `repeat(${num},1fr)`;

   for (let i=0;i<num * num; i++) {
    let div = document.createElement("div");
    div.classList.add("grid-item");
    let size = 400/num;
    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
    div.style.backgroundColor = "blue";
    grid.appendChild(div);
    div.addEventListener("mouseover",changeColor);
    div.addEventListener("mousedown", changeColor);
}  

}

const clearGrid = document.querySelectorAll("button")[1];

clearGrid.addEventListener("click",clear);

function clear() {
    return changeGrid(16);
}

function ask() {
    let ans = +prompt("Enter number less than 100", 16);

    if(ans < 100) {
        return changeGrid(ans);
    } else {
       return alert("Invalid!");
    }
}

//new task : create a rainbow based on random RGB value

const rainbowBtn = document.querySelectorAll("button")[2];

rainbowBtn.addEventListener("click",changeListener);
rainbowBtn.addEventListener("click",rainbow);



function changeListener() {
    const divs = document.querySelectorAll("div");
    for(let i =0;i<divs.length;i++) {
        divs[i].removeEventListener("mousedown",changeColor);
        divs[i].removeEventListener("mouseover",changeColor);
        divs[i].addEventListener("mousedown",rainbow);
        divs[i].addEventListener("mouseover",rainbow);
    }

}

function rainbow(e) {

    
    if(e.type === "mouseover" && !mouseDown) {
        return
    } else {
        function random() {
            return Math.random()*256;
        }
        let red = random();
        let green = random();
        let blue = random();
    e.target.style.backgroundColor =`rgb(${red},${green},${blue})`;
   }
}