let createGrid = (gridSize = 16, color = "black") => {
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const gridElement = document.createElement("div");
      gridElement.classList.add("square");
      gridElement.setAttribute(
        "style",
        `height: ${550 / gridSize}px; width: ${550 / gridSize}px;`
      );
      container.appendChild(gridElement);

      gridElement.addEventListener("mouseenter", (event) => {
        gridElement.classList.add("hover");
        if (color !== "black") {
          gridElement.style.backgroundColor = color;
        }
      });
    }
  }
};

let resetGridSize = (newGridSize) => {
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  createGrid((gridSize = newGridSize));
};

let gridSize = 16;
let newGridSize = 0;
const container = document.querySelector(".container");
createGrid();
const gridSizingButton = document.querySelector(".gridSizingButton");
gridSizingButton.addEventListener("click", () => {
  let newGridSize = parseInt(prompt("Enter grid size (Max: 100)"));
  console.log(newGridSize);

  if (isNaN(newGridSize)) {
    alert("No input received");
  } else if (newGridSize <= 0 || newGridSize > 100) {
    alert("Invalid grid size");
  } else {
    resetGridSize(newGridSize);
    gridSize = newGridSize;
    newGridSize = 0;
  }
});
