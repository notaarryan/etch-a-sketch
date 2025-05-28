let createGrid = (color = "black", gridSize = 16) => {
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const gridElement = document.createElement("div");
      gridElement.classList.add("square");
      gridElement.setAttribute(
        "style",
        `height: ${550 / gridSize}px; width: ${550 / gridSize}px;`
      );
      container.appendChild(gridElement);
    }
  }
};

const container = document.querySelector(".container");
createGrid();
