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
    div.style.border = "1px solid black";

    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "lightgreen";
    });

    container.appendChild(div);
  }
}

createGrid();
