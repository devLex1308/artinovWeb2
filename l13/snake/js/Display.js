function Display(sizeX, sizeY){

	var table;
	var _size_x;
	var _size_y;
	var score;

	this.init = function(arg_X, arg_Y){
		_size_x = arg_X;
		_size_y = arg_Y;

		table = document.createElement("table");
		table.setAttribute('class','display')

		var conteiner = document.getElementById("content");
		score = document.getElementById("score");

		console.log(conteiner.innerHTML);
		for (var i = 0; i < _size_y; i++){
			var tr = document.createElement('tr');
			for (var j = 0; j < _size_x; j++){
				var td = document.createElement('td');
				td.setAttribute('id',"td"+j+"_"+i);
				tr.appendChild(td);
			}
			table.appendChild(tr);
		}

		conteiner.appendChild(table);
	}

	this.setScore = function(value){
		score.innerHTML = value;
	}

	this.setPixel = function(x, y){
		var pixel = document.getElementById("td"+x+"_"+y);
		pixel.setAttribute("class", "active");
	}

	this.clearDisplay = function(){
		activCells = table.querySelectorAll(".active");
		for (var i = 0; i < activCells.length; i++){
			activCells[i].setAttribute("class", "");
		}
	}

	this.getSizeX = function(){
		return _size_x;
	}

	this.getSizeY = function(){
		return _size_y;
	}

	this.init(sizeX, sizeY);

}

