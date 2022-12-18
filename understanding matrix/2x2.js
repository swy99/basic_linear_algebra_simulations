const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const NUM_POINTS = 50;
const POINT_RADIUS = 3;

// Generate some random points in the range [-1, 1] x [-1, 1]
const points = [];
for (let i = 0; i < NUM_POINTS; i++) {
  const x = 2 * Math.random() - 1;
  const y = 2 * Math.random() - 1;
  points.push({x, y});
}

// Set up the canvas dimensions and grid
canvas.width = 600;
canvas.height = 600;
const gridSize = 300;
const axisLabelOffset = 15;
const tickSize = 5;
const tickLabelOffset = 3;
const tickLabelSize = 10;

// Draw the grid, points, and labels on the canvas
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the grid lines
  ctx.strokeStyle = 'grey';
  ctx.lineWidth = 1;
  for (let x = gridSize; x < canvas.width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = gridSize; y < canvas.height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Transform and draw the points
  ctx.fillStyle = 'red';
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const c = parseFloat(document.getElementById('c').value);
  const d = parseFloat(document.getElementById('d').value);
  for (const point of points) {
    const x = (a * point.x + b * point.y + 2) * gridSize / 2 + canvas.width / 2 - gridSize;
    const y = (c * point.x + d * point.y + 2) * gridSize / 2 + canvas.height / 2 - gridSize;
    ctx.beginPath();
    ctx.arc(x, y, POINT_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
  }
}

// Update the matrix elements and redraw the points when the sliders are moved
function updateMatrix() {
  document.getElementById('aValue').textContent = document.getElementById('a').value;
  document.getElementById('bValue').textContent = document.getElementById('b').value;
  document.getElementById('cValue').textContent = document.getElementById('c').value;
  document.getElementById('dValue').textContent = document.getElementById('d').value;
  draw();
}
  
// Initialize the matrix and draw the points
updateMatrix();
  