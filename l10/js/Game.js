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
		state = STATE_GAME_PAUSE;
		initKey();
	}

	initKey = function(){
		document.onkeydown  = function(e){
			switch(e.keyCode){
				case KEY_UP: 
					state = STATE_GAME_GO_UP;
					break; 
				case KEY_RIGHT: 
					state = STATE_GAME_GO_RIGHT;
					break;
				case KEY_DOWN: 
					state = STATE_GAME_GO_DOWN;
					break;
				case KEY_LEFT: 
					state = STATE_GAME_GO_LEFT;
					break;
				default :
					state = STATE_GAME_PAUSE;
			}
		}
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