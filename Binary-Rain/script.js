document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById('binaryCanvas');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const fontSize = 16;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const char = Math.random() > 0.5 ? '0' : '1';
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      ctx.fillText(char, x, y);
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  setInterval(draw, 50);

  function updateTime() {
    const timeEl = document.getElementById('DateTime');
    if (timeEl) {
      timeEl.textContent = new Date().toLocaleTimeString();
    }
  }
  setInterval(updateTime, 1000);
  updateTime();
});
