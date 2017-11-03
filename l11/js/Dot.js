function Dot(x, y){
	
	//var this = {};

	var _x;
	var _y;

	this.init = function(arg_x, arg_y){
		_x = arg_x;
		_y = arg_y;
	}

	this.getX = function(){ return _x;}
	this.getY = function(){ return _y;}

	this.setX = function(val){ _x = val;}
	this.setY = function(val){ _y = val;}

	this.left = function(){ _x--;}
	this.right = function(){ _x++;}

	this.up = function(){ _y--;}
	this.down = function(){ _y++;}

	this.init(x, y);
	//return this;
}