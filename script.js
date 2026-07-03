console.log("RESET SYSTEM LOADED");

const player = document.querySelector(".player");
const world = document.querySelector(".world");

let x = 100;
let y = 100;

function render() {
  player.style.left = x + "px";
  player.style.top = y + "px";
}

/* simple movement */
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") y -= 10;
  if (e.key === "ArrowDown") y += 10;
  if (e.key === "ArrowLeft") x -= 10;
  if (e.key === "ArrowRight") x += 10;

  render();
});

render();