function Game(){
	
	var display;
	var dot;
	var KEY_UP = 38;
	var KEY_RIGHT = 39;
	var KEY_DOWN = 40;
	var KEY_LEFT = 37;
	var KEY_W = 87;
	var STATE_GAME_GO_UP = 0;
	var STATE_GAME_GO_RIGHT = 1;
	var STATE_GAME_GO_LEFT = 2;
	var STATE_GAME_GO_DOWN = 3;
	var STATE_GAME_PAUSE = 4;
	var state;
	var snake = [];

	var mouse;

	this.init = function(){

		display = new Display(20,17);

		snake[0] = new Dot(10, 10);
		snake[1] = new Dot(10, 9);
		snake[2] = new Dot(10, 8);
		snake[3] = new Dot(10, 7);

		this.initMouse();

		state = STATE_GAME_GO_DOWN;
		initKey();

		console.log("init");
	}

	this.initMouse = function(){
		var x = Math.floor(Math.random()*display.getSizeX());
		var y = Math.floor(Math.random()*display.getSizeY());
		mouse = new Dot(x, y);
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

		if(state != STATE_GAME_PAUSE){
			var tailX = snake[snake.length-1].getX();
			var tailY = snake[snake.length-1].getY();
			for (var i = snake.length - 1; i > 0; i--){
				snake[i].setX(snake[i-1].getX());
				snake[i].setY(snake[i-1].getY());
			}
		}

		display.clearDisplay();
		switch(state){
			case STATE_GAME_GO_UP: 
				snake[0].up();
				if(snake[0].getY()<0){
					snake[0].setY(display.getSizeY()-1);
				} 
				break;
			case STATE_GAME_GO_RIGHT: 
				snake[0].right() ; 
				if(snake[0].getX()>display.getSizeX()-1){
					snake[0].setX(0);
				} 
				
				break;
			case STATE_GAME_GO_LEFT: 
				snake[0].left() ; 
				if(snake[0].getX()<0){
					snake[0].setX(display.getSizeX()-1);
				} 
				break;
			case STATE_GAME_GO_DOWN: 
				snake[0].down() ; 
				if(snake[0].getY()>display.getSizeY()-1){
					snake[0].setY(0);
				} 
				break;
			case STATE_GAME_PAUSE: ; break;
		}	

		var result = this.eatMouse(snake[0].getX(), snake[0].getY());

		if(result){
			snake.push(new Dot(tailX,tailY));
		}
		
		for(var i = 0; i < snake.length; i++){
			display.setPixel(snake[i].getX(), snake[i].getY());
		}

		display.setPixel(mouse.getX(), mouse.getY());
		
	}	

	this.eatMouse = function(x, y){
		if(mouse.getX() == x && mouse.getY()==y){
			this.initMouse();
			koef--;
			return true;
		}else{
			return false;
		}
	}

	this.init();
}