


function draw() {
  var canvas = document.getElementById('tutorial');
  var c = canvas.getContext('2d');


var x1 = 30;
var dx1 = 1;
var radius1 = 30;

var x2 = 30;
var dx2 = 2;
var radius2 = 30;

var x3 = 30;
var dx3 = 3;
var radius3 = 30;

var x4 = 30;
var dx4 = 4;
var radius4 = 30;

function animate1() {
  requestAnimationFrame(animate1);


  c.clearRect(0, 0, innerWidth, innerHeight);

  c.beginPath();
  c.fillRect(x1, 20, 20,20);
  c.fillRect(x2, 45, 20, 20);
  c.fillRect(x3, 70, 20, 20);
  c.fillRect(x4, 95, 20, 20);

  if(x1 > ((innerWidth/100)*10) || x1 - radius1 < 0){
    dx1 = -dx1;
  }

  if(x2 > ((innerWidth/100)*10) || x2 - radius2 < 0){
    dx2 = -dx2;
  }

  if(x3 > ((innerWidth/100)*10) || x3 - radius3 < 0){
    dx3 = -dx3;
  }

  if(x4 > ((innerWidth/100)*10) || x4 - radius4 < 0){
    dx4 = -dx4;
  }

x1 += dx1;
x2 += dx2;
x3 += dx3;
x4 += dx4;
}

    animate1();

}
