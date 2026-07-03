function goToRoom(roomId) {
  const rooms = document.querySelectorAll('.room');

  rooms.forEach(room => {
    room.classList.add('hidden');
  });

  document.getElementById(roomId).classList.remove('hidden');
}

function goToRoom(roomId) {
  const rooms = document.querySelectorAll(".room");

  rooms.forEach(room => {
    room.classList.remove("active");
  });

  const next = document.getElementById(roomId);
  next.classList.add("active");
}