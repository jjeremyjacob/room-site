console.log("ROOM WORLD LOADED");

const player = document.querySelector(".player");

/* 6 ROOM POSITIONS (matches CSS grid layout visually) */
const rooms = {
  room1: { x: 50,  y: 50 },
  room2: { x: 250, y: 50 },
  room3: { x: 450, y: 50 },

  room4: { x: 50,  y: 250 },
  room5: { x: 250, y: 250 },
  room6: { x: 450, y: 250 }
};

let currentRoom = "room1";

/* initialize player position */
let x = rooms[currentRoom].x;
let y = rooms[currentRoom].y;

function render() {
  player.style.left = x + "px";
  player.style.top = y + "px";
}

/* INPUT CONTROLS */
window.addEventListener("keydown", (e) => {

  /* ROOM SWITCHING (1–6 keys) */
  if (e.key === "1") currentRoom = "room1";
  if (e.key === "2") currentRoom = "room2";
  if (e.key === "3") currentRoom = "room3";
  if (e.key === "4") currentRoom = "room4";
  if (e.key === "5") currentRoom = "room5";
  if (e.key === "6") currentRoom = "room6";

  /* SNAP PLAYER TO ROOM CENTER */
  x = rooms[currentRoom].x;
  y = rooms[currentRoom].y;

  /* ARROW KEY MOVEMENT INSIDE WORLD */
  if (e.key === "ArrowUp") y -= 10;
  if (e.key === "ArrowDown") y += 10;
  if (e.key === "ArrowLeft") x -= 10;
  if (e.key === "ArrowRight") x += 10;

  render();
});

/* initial draw */
render();