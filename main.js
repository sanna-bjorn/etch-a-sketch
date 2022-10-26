const container = document.querySelector(".flex-container");

for (i = 0; i < 16; i++) {
  let grid = document.createElement("div");
  grid.classList.add("grid");
  container.appendChild(grid);
}

window.addEventListener("mouseover", function (e) {
  const trackMouse = document.querySelector(e.mouseHover);
  trackMouse.hover();
  hover.classList.add("hover");
});
