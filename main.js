const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const layers = 6;
const waveHeight = 50;
const baseColor = 240;

function drawWaveLayer(yOffset, color, shadowOffset) {
  ctx.beginPath();
  ctx.moveTo(0, yOffset);

  const points = 10;
  for (let i = 0; i <= points; i++) {
    const x = (canvas.width / points) * i;
    const y = yOffset + Math.sin(i + yOffset * 0.01) * waveHeight * Math.random();
    ctx.lineTo(x, y);
  }

  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();

  ctx.shadowColor = 'rgba(0,0,0,0.15)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = shadowOffset;
  ctx.shadowOffsetY = shadowOffset;

  ctx.fillStyle = `rgb(${color}, ${color}, ${color})`;
  ctx.fill();

  ctx.shadowColor = 'transparent';
}

function generateHills() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < layers; i++) {
    const yOffset = 50 + i * 60;
    const color = baseColor - i * 8;
    drawWaveLayer(yOffset, color, 5);
  }
}

generateHills();

document.addEventListener('click', generateHills);
