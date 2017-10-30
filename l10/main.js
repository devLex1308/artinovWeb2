console.log("Main.js");


function Game(){
	
	var display;
	var dot;
	var KEY_UP = 38;
	var KEY_RIGHT = 39;
	var KEY_DOWN = 40;
	var KEY_LEFT = 37;
	var STATE_GAME_GO_UP = 0;
	var STATE_GAME_GO_RIGHT = 1;
	var STATE_GAME_GO_LEFT = 2;
	var STATE_GAME_GO_DOWN = 3;
	var STATE_GAME_PAUSE = 4;
	var state;

	this.init = function(){
		display = new Display(20,17);
		dot = new Dot(10, 10);
		state = STATE_GAME_GO_RIGHT;
	}

	this.update = function(){
		console.log("update");
		display.clearDisplay();
		switch(state){
			case STATE_GAME_GO_UP: 
				dot.up() ; 
				break;
			case STATE_GAME_GO_RIGHT: 
				dot.right() ; 
				break;
			case STATE_GAME_GO_LEFT: 
				dot.left() ; 
				break;
			case STATE_GAME_GO_DOWN: 
				dot.down() ; 
				break;
			case STATE_GAME_PAUSE: ; break;
		}
		
		display.setPixel(dot.getX(), dot.getY());
	}	

	this.init();
}


document.onkeydown  = function(e){
	console.log(e.keyCode);
}


var game = new Game();

setInterval(function(){
	game.update();
}, 1000);

// var dot = 
// dot.down();
// dot.right();
// console.log(dot.getX(),dot.getY());

