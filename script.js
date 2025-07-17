const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];

for (let i = 0; i < 200; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 6,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    tilt: Math.floor(Math.random() * 10) - 10,
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let c of confetti) {
    ctx.beginPath();
    ctx.lineWidth = c.r;
    ctx.strokeStyle = c.color;
    ctx.moveTo(c.x, c.y);
    ctx.lineTo(c.x + c.tilt, c.y + c.tilt + 10);
    ctx.stroke();
  }
  updateConfetti();
  requestAnimationFrame(drawConfetti);
}

function updateConfetti() {
  for (let c of confetti) {
    c.y += Math.cos(c.d) + 1 + c.r / 2;
    c.x += Math.sin(c.d);
    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  }
}

drawConfetti();
