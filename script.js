var c = document.getElementById('maisonCanvas');
var ctx = c.getContext('2d');

// carcasse
ctx.fillStyle = '#00B44E';
ctx.fillRect(100,120,200,50);
ctx.fillRect(50,170,300,60);

// roues
ctx.beginPath();
ctx.arc(85, 266, 35, 0, 2 * Math.PI, true);
ctx.moveTo(350,266);
ctx.arc(315, 266, 35, 0, 2 * Math.PI, true);
ctx.fillStyle = '#C9C9C9';
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = '#000';
ctx.stroke();
