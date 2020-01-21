
function draw() {
  var canvas = document.getElementById('tutorial');
  var c = canvas.getContext('2d');
  var ctx = canvas.getContext('2d');

var COUNT = 30;

function animate1() {

  c.clearRect(0, 0, innerWidth, innerHeight);

// Matrix transformation
ctx.translate(160 + COUNT, 85 + COUNT);
ctx.rotate(Math.PI/64);
ctx.scale(1, 1);
ctx.translate(-160 - COUNT, -85 - COUNT);

// Rotated rectangle
ctx.fillStyle = 'red';
ctx.fillRect(90 + COUNT, 70 + COUNT, 140, 30);


requestAnimationFrame(animate1);
}

    animate1();

}
