const container = document.querySelector(".container");
const btnBlack = document.createElement("button");
const btnGray = document.createElement("button");
const btnRGB = document.createElement("button");
const btnSize = document.createElement("button");
const buttonsContainer = document.querySelector(".buttons");

// create the div elements and loop with the amount of rows and columns
function createDivs(rows, cols) {
  for (i = 0; i < cols * rows; i++) {
    const div = document.createElement("div");
    div.style.border = "1px solid purple";
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.appendChild(div).classList.add("box");
  }
}

//calling the div creation function with default amount of divs (16)
createDivs(16, 16);

//functions and event listeners for gray and black color to add on divs on mouseover events

function grayColor() {
  const boxs = container.querySelectorAll(".box");
  btnGray.textContent = "Gray";
  btnGray.addEventListener("click", () => {
    boxs.forEach((box) =>
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "gray";
      })
    );
  });
  buttonsContainer.appendChild(btnGray).classList.add("btn");
}
grayColor();

function blackColor() {
  const boxs = container.querySelectorAll(".box");
  btnBlack.textContent = "Black";
  btnBlack.addEventListener("click", () => {
    boxs.forEach((box) =>
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
      })
    );
  });
  buttonsContainer.appendChild(btnBlack).classList.add("btn");
}
blackColor();

function reSet() {
  const boxs = container.querySelectorAll(".box");
  boxs.forEach((box) => box.remove());
}

// resize button to add a desired amount of squares on the grid. Max number set on 100 to avoid crashing.

function reSize() {
  btnSize.textContent = "Grid size";
  btnSize.addEventListener("click", () => {
    let user = prompt("What size do you want your grid to be?");
    if (user > 100) {
      reSet();
      prompt("Please enter a number under 100");
    }
    if (user === null || user < 1) {
      reSet();
      createDivs(16, 16);
      blackColor();
      grayColor();
    } else {
      reSet();
      createDivs(user, user);
      blackColor();
      grayColor();
    }
  });
  buttonsContainer.appendChild(btnSize).classList.add("btn");
}

reSize();

//TODO: I don't know why the reset button changes location on refresh.
