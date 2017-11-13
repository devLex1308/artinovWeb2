console.log("Main.js");

var game = new Game();
var koef = 16;

var count = 0;
setInterval(function(){
	if(count <= koef){
		count++;
	}else{
		game.update();
		count = 0;
	}
}, 50);

// var dot = 
// dot.down();
// dot.right();
// console.log(dot.getX(),dot.getY());

