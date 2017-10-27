console.log("Підключили файл dom.js");

var p = document.getElementById("firstParagraf1");

p.style.color = 'red';
p.style.width = "200px"; 

p.setAttribute('class','newClass');
p.setAttribute('data-name','paragraf');

var arrayP = document.getElementsByClassName("pClass");

console.log(p.style);
//console.log(arrayP);

console.log(arrayP.length);

for ( var i = 0 ; i < arrayP.length; i++) {
	arrayP[i].setAttribute('data-name',i);
	console.log(arrayP[i].innerHTML);
	arrayP[i].innerHTML=i;
}

var  table = document.createElement("table");
table.setAttribute('class','display')

var conteiner = document.getElementById("content");

console.log(conteiner.innerHTML);
//conteiner.innerHTML = "<p>0</p>";

var countRow = 10;
var contCol = 20;

for (var i = 0; i < countRow; i++){
	var tr = document.createElement('tr');
	for (var j = 0; j<contCol; j++){
		var td = document.createElement('td');
		td.setAttribute('id',"td"+j+"_"+i);
		//td.innerHTML = j + " * " + i +" = "+ j*i;
		td.onclick = function(){
			console.log("td"+j+"_"+i);

			var currentClass = this.getAttribute('class');
			if(currentClass=='active'){
				this.setAttribute("class","");
			}else{
				this.setAttribute("class","active");
			}

			console.log(this.getAttribute("id"));
			//this.setAttribute("class","active");
		}

		td.ondblclick = function(){
					
			this.style['background'] = 'green';
			var t = this.style['background'];
			console.log('background = ', t );

		}

		// td.onmouseover = function(){
		// 	this.style['background'] = '#aaa';
		// }

		// td.onmouseout = function(){
		// 	this.style['background'] = '';
		// }


		tr.appendChild(td);
	}
	table.appendChild(tr);
}

conteiner.appendChild(table);
// arrayP.forEach(function(item,i){
// 	item.setAttribute('data-name',i);
// });