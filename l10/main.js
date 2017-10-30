console.log("Main.js");

var obj = {};

var obj = function (argument) {
	return {}
}

var display = new Display(20,17);

display.setPixel(0,0);
display.setPixel(10,7);
display.setPixel(4,8);
display.clearDisplay();

setInterval(function(){
	display.clearDisplay();
	var x = Math.round(Math.random()*10);
	var y = Math.round(Math.random()*10);
	display.setPixel(x, y);
}, 500);

var dot = new Dot(10, 10);
dot.down();
dot.right();
console.log(dot.getX(),dot.getY());

