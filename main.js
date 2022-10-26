const container = document.querySelector(".flex-container");

for (i = 0; i < 16; i++) {
  let grid = document.createElement("div");
  grid.classList.add("grid");
  container.appendChild(grid);
}

window.addEventListener("hover", playSound);

// loop 16 x 16 times through the div creation
// use flexbox to line the divs
// check borders
