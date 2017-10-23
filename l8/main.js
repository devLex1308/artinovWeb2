console.log("2^4 = ", pow(2,4));

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

function pow(x, step){
	var result = x;
	for(var i=1; i<step; i++){
		result *= x;
	}
	return result;
}
 
var x = 7; 
var y = 4 * pow(x, 3) +  3 * pow(x, 1);

console.log("Count = ", pow(2,10));

// var g = pifagor(3,4);
// console.log(" g = ", g);

var pifagor = function(a,b){
	var g = Math.sqrt(pow(a,2) + pow(b,2));
	return g;
}

var g = pifagor(3,5);
console.log(" g = ", g);

function randomAge(start, end){
	var r = Math.round(start + Math.random()*(end - start));
	return r;
}

var kings = [];

for(var i = 0; i< 10; i++){
	kings[i] = {
		name: "Karl " + i,
		age: randomAge(18,100)
	}
}

console.log(kings);

for(var i = 0; i < kings.length; i++){
	if(kings[i].age>=40){
		console.log(kings[i]);
	}
}

var array = [4,7,1,3,239873587,6,7,2];

var min = array[0];
var indexMin = 0;

// for (var n = 1; n < array.length; n++){
// 	var newIndexMin = indexMin;

// 	for(var i = n + 1; i < array.length; i++){
// 		if(array[i]<min){
// 			min = array[i];
// 			newIndexMin = i;
// 		}
// 	}

// 	array[newIndexMin] = array[indexMin];
// 	array[indexMin] = min;

// 	indexMin = newIndexMin;
// }

// console.log(array);

var sortArray = array.sort(function(a,b){
	return a > b;
});

sortArray.push(2);
sortArray.push("Ivan");

sortArray.pop();
sortArray.pop();
sortArray.pop();

console.log(sortArray);

sortArray.forEach(function(item, i){
	console.log("item[" + i +"] = " + item);
});

var powArray = sortArray.map(function(item, i){
	return item*item + 2;
});

console.log(powArray);

var powArray2 = powArray;

powArray2[2] = "Привіт";

console.log(sortArray);
console.log(powArray);
console.log(powArray2);

kub['city'] = "Вінниця";

var arrayKey = Object.keys(kub);

Object.keys(kub).map(function(key){
	console.log("kub["+key+"] = "+ kub[key]);
});

for(var key in kub){
	console.log("kub["+key+"] = "+ kub[key]);
}

var string = "abc";

console.log(string[1]);

//console.log(arrayKey);
