let container = document.querySelector("h1");
let palette = ["#4ECDC4", "#A9CF54", "#FF6B6B", "#556270"];
let paletteIndex = 0;

const setEffect = () => {
  container.className = "no-transition";

  // Debounce change to allow for css changes
  setTimeout(function () {
    container.style.color = palette[paletteIndex];
    container.className = "transition";
    paletteIndex += 1;
    paletteIndex %= palette.length;
  }, 10);
};

setInterval(setEffect, 2500);
