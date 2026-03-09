const { createCanvas } = require('canvas');
const fs = require('fs');

const size = 128;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Background circle - peach
ctx.beginPath();
ctx.arc(64, 64, 62, 0, Math.PI * 2);
ctx.fillStyle = '#f4b67c';
ctx.fill();

// Cat ears
ctx.fillStyle = '#ffffff';
// Left ear
ctx.beginPath();
ctx.moveTo(25, 52);
ctx.lineTo(38, 18);
ctx.lineTo(52, 48);
ctx.closePath();
ctx.fill();

// Right ear
ctx.beginPath();
ctx.moveTo(76, 48);
ctx.lineTo(90, 18);
ctx.lineTo(103, 52);
ctx.closePath();
ctx.fill();

// Inner ears - pink
ctx.fillStyle = '#f5a0b0';
// Left inner
ctx.beginPath();
ctx.moveTo(32, 48);
ctx.lineTo(39, 27);
ctx.lineTo(47, 46);
ctx.closePath();
ctx.fill();

// Right inner
ctx.beginPath();
ctx.moveTo(81, 46);
ctx.lineTo(89, 27);
ctx.lineTo(96, 48);
ctx.closePath();
ctx.fill();

// Head - white circle
ctx.beginPath();
ctx.ellipse(64, 68, 36, 32, 0, 0, Math.PI * 2);
ctx.fillStyle = '#ffffff';
ctx.fill();

// Eyes
ctx.fillStyle = '#2d2d2d';
ctx.beginPath();
ctx.arc(50, 62, 4, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(78, 62, 4, 0, Math.PI * 2);
ctx.fill();

// Eye shine
ctx.fillStyle = '#ffffff';
ctx.beginPath();
ctx.arc(52, 60, 1.5, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(80, 60, 1.5, 0, Math.PI * 2);
ctx.fill();

// Nose - small pink triangle
ctx.fillStyle = '#f5a0b0';
ctx.beginPath();
ctx.moveTo(64, 70);
ctx.lineTo(60, 74);
ctx.lineTo(68, 74);
ctx.closePath();
ctx.fill();

// Mouth
ctx.strokeStyle = '#2d2d2d';
ctx.lineWidth = 1.5;
ctx.beginPath();
ctx.moveTo(64, 74);
ctx.lineTo(64, 78);
ctx.stroke();
ctx.beginPath();
ctx.arc(58, 78, 6, 0, Math.PI, true);
ctx.stroke();
ctx.beginPath();
ctx.arc(70, 78, 6, 0, Math.PI, true);
ctx.stroke();

// Cheek blush
ctx.fillStyle = 'rgba(245, 160, 176, 0.4)';
ctx.beginPath();
ctx.ellipse(40, 74, 8, 5, 0, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(88, 74, 8, 5, 0, 0, Math.PI * 2);
ctx.fill();

// Save as PNG
const buf = canvas.toBuffer('image/png');
fs.writeFileSync('C:/Users/idree/Downloads/floria/favicon.png', buf);
console.log('Favicon created!');
