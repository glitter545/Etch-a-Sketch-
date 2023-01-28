document.body.style.backgroundColor = "antiquewhite";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

let num = 16;

const grid = document.getElementById("grid");
grid.style.width = "400px";
grid.style.height = "400px";
grid.style.border = "2px solid blue";
grid.style.display = "grid";
grid.style.gridTemplateColumns = `repeat(${num},1fr)`;
grid.style.gridTemplateRows = `repeat(${num},1fr)`;


//create a num*num divs inside grid
for (let i=0;i<num * num; i++) {
    let div = document.createElement("div");
    let size = 400/num;
    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
    div.style.backgroundColor = "blue";
    grid.appendChild(div);
}

