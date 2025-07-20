const container = document.querySelector(".container");

const button = document.querySelector("button");

const GRID_WIDTH = 600;

button.addEventListener("click", () => {
  let squaresPerSide;

  do {
    squaresPerSide = +prompt("How many squares per side should the grid have? (Max. 100)");
  } while (squaresPerSide == "" || squaresPerSide > 100);

  createGrid(squaresPerSide);
});

function createGrid(squaresPerSide = 16) {
  container.textContent = "";

  for (let i = 0; i < squaresPerSide ** 2; i++) {
    const div = document.createElement("div");

    div.style.width = `${GRID_WIDTH/squaresPerSide}px`;
    div.style.height = `${GRID_WIDTH/squaresPerSide}px`;
    div.style.border = squaresPerSide < 50 ? "1px solid darkslateblue" : "1px solid lavender"

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
