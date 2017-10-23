// alert("Привіт!");

//var isAdmin = confirm("Ви адмін?");

// alert(result);

//var age = prompt("Скільки вам років?",18);

//console.log(+age);

console.log(18);

var string = "1234";
console.log(+string);
var a = 7;

// if(isAdmin&&(age>=18)){
// 	alert("Вітаємо на сайті!");
// }else{
// 	alert("Доступ заборонено!");
// }


function firstFunction(){
	console.log("Hi!");

	var a = 1;
	console.log("a=", a);
	var b = 2;
	sum = a + b;
	console.log("sum = ", sum);
	secondFunction();
	
}



function secondFunction(){
	console.log("Друга функція!");


	function newFunction(){
		console.log("Локальна функція!");
	}
}


//newFunction();
console.log("a=", a);


for(var i=0; i<2; i++){
	firstFunction();
}

secondFunction();

console.log(sum);

function hiUser(userName, age){
	console.log("Привіт, " + userName);
	
	if(age===undefined){
		var _age = "невідомо";
	}else{
		var _age = age;
	}

	console.log(arguments);

	for(var i = 0; i < arguments.length; i++){
		console.log("arguments[" + i + "] = " + arguments[i]);
	}

	//console.log("Ваш вік " + _age);
}

var name = "Саша";

hiUser(name, 28);

name = "Таня";

var userAge = 17;

hiUser(name, userAge, 23, 45);

hiUser("Іван");

// function volume(a,b,c){
// 	var result = a*b*c;
// 	console.log("V = " + result);

// 	var D = b*b - 4*a*c;

// 	console.log("D = " + D);
// }

volume(1,2,3);
volume(2,1,3);

var kub = {
	length:10,
	height:20,
	width:15
}

function volume(obj){
	var V = obj.length * obj.height * obj.width;

	console.log("V = " + V);
}

volume(kub);

function sumNumber(n){
	var tmp_n1 = n;
	var number1 = tmp_n1%10;

	tmp_n1 -= number1;
	tmp_n1 /=10;

	number2 = tmp_n1%10;

	tmp_n1 -= number2;
	tmp_n1 /=10;

	number3 = tmp_n1%10;

	sum1 = number3 + number2 + number1;

	//console.log("Сума чисел " + n + " = " + sum1);

	return sum1;
}

var number = 47;
var n = sumNumber(number);

console.log("Сума чисел " + number + " = " + sum1);

var counter = 0;
for (var n1 = 0; n1<=999; n1++){
	for (var n2 = 0; n2<=999; n2++){	
		var sumN1 = sumNumber(n1);
		var sumN2 = sumNumber(n2);
		if(sumN1==sumN2){
			counter++;
		}
	}
}

console.log("Count = ", counter);