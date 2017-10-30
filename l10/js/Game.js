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
	var snake = [];

	this.init = function(){

		display = new Display(20,17);

		snake[0] = new Dot(10, 10);
		snake[1] = new Dot(10, 9);
		snake[2] = new Dot(10, 8);
		snake[3] = new Dot(10, 7);

		state = STATE_GAME_GO_DOWN;
		initKey();

		console.log("init");
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

		for (var i = snake.length - 1; i > 0; i--){
			snake[i].setX(snake[i-1].getX());
			snake[i].setY(snake[i-1].getY());
		}

		display.clearDisplay();
		switch(state){
			case STATE_GAME_GO_UP: 
				snake[0].up() ; 
				break;
			case STATE_GAME_GO_RIGHT: 
				snake[0].right() ; 
				break;
			case STATE_GAME_GO_LEFT: 
				snake[0].left() ; 
				break;
			case STATE_GAME_GO_DOWN: 
				snake[0].down() ; 
				break;
			case STATE_GAME_PAUSE: ; break;
		}	

		console.log("s",snake);

		for(var i = 0; i < snake.length; i++){
			display.setPixel(snake[i].getX(), snake[i].getY());
		}
	}	

	this.init();
}