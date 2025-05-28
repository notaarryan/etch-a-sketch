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

      gridElement.addEventListener("mouseenter", (event) => {
        gridElement.classList.add("hover");
        if (color !== "black") {
          gridElement.style.backgroundColor = color;
        }
      });
    }
  }
};

const container = document.querySelector(".container");
createGrid();
