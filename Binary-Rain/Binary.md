# Binary Rain Drop Project

**Project Owner:**  
Azizbek Axmatjonov

**Project Creation Date:**  
01.09.2025

**Time Spent:**  
48 minutes

**Used Tools:**  
- VS Code

**Used Languages:**  
- HTML  
- CSS  
- JavaScript  

---

## Code Explanation

### `script.js`

The core logic is contained in `script.js`, which is executed only after the DOM content has fully loaded to ensure all elements exist before the script interacts with them.

```js
document.addEventListener("DOMContentLoaded", function () {
  // Get canvas and drawing context
  const canvas = document.getElementById('binaryCanvas');
  const ctx = canvas.getContext('2d');

  // Resize canvas to fill the window
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Font size and calculate number of columns for binary rain
  const fontSize = 16;
  let columns = Math.floor(canvas.width / fontSize);
  
  // Array to keep track of the y-position of each column drop
  let drops = Array(columns).fill(1);

  // Draw function runs repeatedly to update the rain effect
  function draw() {
    // Semi-transparent black background to create fading effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set font and color for text
    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + "px monospace";

    // Loop through each column to draw binary characters
    for (let i = 0; i < drops.length; i++) {
      // Randomly pick '0' or '1'
      const char = Math.random() > 0.5 ? '0' : '1';

      // Calculate x and y position of the character
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // Draw the character on canvas
      ctx.fillText(char, x, y);

      // Reset drop to top randomly when it passes the bottom
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      // Move drop down by one step
      drops[i]++;
    }
  }

  // Run draw function every 50 milliseconds to animate
  setInterval(draw, 50);

  // Update the time displayed in the card every second
  function updateTime() {
    const timeEl = document.getElementById('DateTime');
    if (timeEl) {
      timeEl.textContent = new Date().toLocaleTimeString();
    }
  }
  setInterval(updateTime, 1000);
  updateTime();
});
```
