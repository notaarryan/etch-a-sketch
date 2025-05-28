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

let changeColor = (color = "black") => {
  const testElement = document.createElement("div");
  testElement.style.color = color;

  if (testElement.style.color === "") {
    console.warn(`"${color}" is not a valid CSS color.`);
    return;
  }

  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.classList.add("hover");
      square.style.backgroundColor = color;
    });
  });
};

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let changeToRgb = () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    let color = getRandomColor();
    square.addEventListener("mouseenter", () => {
      square.classList.add("hover");
      square.style.backgroundColor = color;
    });
  });
};

let gridSize = 16;
let newGridSize = 0;
const container = document.querySelector(".container");
createGrid();
const gridSizingButton = document.querySelector(".gridSizingButton");
const colorChangingButton = document.querySelector(".changeColorButton");
const rgbColorButton = document.querySelector(".rgbColorButton");
const resetButton = document.querySelector(".resetButton");
const eraserButton = document.querySelector(".eraserButton");

gridSizingButton.addEventListener("click", () => {
  let newGridSize = parseInt(prompt("Enter grid size (Max: 100)"));

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

colorChangingButton.addEventListener("click", () => {
  let newColor = prompt("Enter color");
  if (newColor == "") {
    alert("No input received");
  } else {
    changeColor(newColor);
  }
});

rgbColorButton.addEventListener("click", () => {
  changeToRgb();
});

resetButton.addEventListener("click", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    if (square.classList.contains("hover")) {
      square.classList.remove("hover");
      square.style.backgroundColor = "";
    }
  });
});

eraserButton.addEventListener("click", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.classList.remove("hover");
      square.style.backgroundColor = "";
    });
  });
});
