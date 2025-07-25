const container = document.querySelector(".container");

const button = document.querySelector("button");

const GRID_WIDTH = 600;

button.addEventListener("click", () => {
  let squaresPerSide;

  do {
    squaresPerSide = +prompt("How many squares per side should the grid have? (Max. 100)");
  } while (!Number.isInteger(squaresPerSide) || squaresPerSide > 100 || squaresPerSide <= 0);

  createGrid(squaresPerSide);
});

function createGrid(squaresPerSide = 16) {
  container.textContent = "";

  for (let i = 0; i < squaresPerSide ** 2; i++) {
    const div = document.createElement("div");

    div.style.width = `${GRID_WIDTH/squaresPerSide}px`;
    div.style.height = `${GRID_WIDTH/squaresPerSide}px`;
    div.style.border = "1px solid " + (squaresPerSide < 30 ? "darkslateblue" : "ghostwhite");

    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = generateRandomColor();
    });

    container.appendChild(div);
  }
}

function generateRandomColor(){
  return `hsl(${Math.floor(Math.random() * 360) + 1} 100% 80%)`;
}

createGrid();
