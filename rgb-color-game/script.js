let numSquares = 6;
let colors = [];
let pickedColor;
const squares = [];
const container = document.getElementById("container");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const resetButton = document.getElementById("reset");
const easyBtn = document.getElementById("easyBtn");
const hardBtn = document.getElementById("hardBtn");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    reset();
  });

  hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    reset();
  });
}

function setupSquares() {
  container.innerHTML = ""; // clear previous squares
  for (let i = 0; i < 6; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("click", function () {
      const clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(pickedColor);
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
    squares.push(square);
    container.appendChild(square);
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

resetButton.addEventListener("click", reset);

function changeColors(color) {
  squares.forEach((square) => {
    square.style.backgroundColor = color;
  });
}

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
