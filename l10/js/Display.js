function Display(sizeX, sizeY){

	var table;

	this.init = function(arg_X, arg_Y){
		table = document.createElement("table");
		table.setAttribute('class','display')

		var conteiner = document.getElementById("content");

		console.log(conteiner.innerHTML);
		for (var i = 0; i < arg_Y; i++){
			var tr = document.createElement('tr');
			for (var j = 0; j < arg_X; j++){
				var td = document.createElement('td');
				td.setAttribute('id',"td"+j+"_"+i);
				tr.appendChild(td);
			}
			table.appendChild(tr);
		}

		conteiner.appendChild(table);
	}

	this.init(sizeX, sizeY);

}

