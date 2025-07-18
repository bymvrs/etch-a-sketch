const container = document.querySelector(".container");

for (let i = 0; i < 256; i++){
    const div = document.createElement("div");

    div.style.width = `${600/16}px`;
    div.style.height = `${600/16}px`;
    div.style.border = "1px solid black";
    
    container.appendChild(div);
}