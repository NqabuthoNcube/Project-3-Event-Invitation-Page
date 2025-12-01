// Basic RSVP submit handler
document.getElementById("rsvp-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("🎉 Your RSVP has been recorded!");
});
/* -----------------------------
   Real Snow Animation
----------------------------- */
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let flakes = [];

function createFlakes() {
  for (let i = 0; i < 80; i++) {
    flakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      d: Math.random() + 1
    });
  }
}

function drawFlakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let i = 0; i < flakes.length; i++) {
    let f = flakes[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveFlakes();
}

let angle = 0;

function moveFlakes() {
  angle += 0.01;
  for (let i = 0; i < flakes.length; i++) {
    let f = flakes[i];
    f.y += Math.pow(f.d, 2) + 1;
    f.x += Math.sin(angle) * 0.5;

    if (f.y > canvas.height) {
      flakes[i] = { 
        x: Math.random() * canvas.width, 
        y: 0, 
        r: f.r,
        d: f.d 
      };
    }
  }
}

createFlakes();
setInterval(drawFlakes, 33);
