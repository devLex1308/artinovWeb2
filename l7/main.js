var age = 50;
var isAdmin = true;

if(age>=18){
	if(age<=150){
		if(isAdmin){

		}
		console.log("Ok");
	}else{
		console.log("Ваш вік не може перевищувати 100 років");
	}
}else{
	console.log("Вам не може бути менше одного року");
}

if(age>=18&&age<=150&&isAdmin){
	console.log("Ви можете працювати");
}else{
	console.log("У вас недостатньо прав");
}

var dayName = 'субота';

// if(dayName == 'субота'){
// 	console.log('Це вихідний');
// }

// if(dayName == 'неділя'){
// 	console.log('Це вихідний');
// }

if(dayName == 'субота'||dayName == 'неділя'||dayName == "п'ятниця"){
	console.log('Це вихідний');
}else{
	console.log("Це будній день");
}

var dayNumber = null;

if(dayName == 'понеділок'){
	dayNumber = 1;
} else if(dayName == 'вівторок'){
	dayNumber = 2;
} else if(dayName == 'середа'){
	dayNumber = 3;
}else{
	console.log("Не коректно введено день");
}


switch(dayName){
	case 'понеділок':
		dayNumber = 1;
		break;
	case 'віторок':
		dayNumber = 2;
		break;
	case 'середа':
		dayNumber = 3;
		break;
	default:
		console.log("Не коректно введено день");
}

var dayNumber2 = 3.7;

switch(dayNumber2){
	case 1:
		console.log("Будній день 1");
	case 2:
		console.log("Будній день 2");
	case 3:
		console.log("Будній день 3");
	case 4:
		console.log("Будній день 4");
	case 5:
		console.log("Будній день 5");
		break;
	case 6:
	case 7:
		console.log("Вихідний день");
		break;
	default:
		console.log("Введіть число від одного до 7");
}

var a = 1;
var b = 0;

console.log(a/b);

console.log(123102389328492385709235704534345634565346345634564357792345782309456*123102389328492385709235704534345634565346345634564357792345782309456 + 1);

var myNumber = true;

for (var i = 0; i<=10; i++){
	if(i%2 == 0){
		console.log(i);
		continue;
	}
	console.log("Ресурсоємна операція");
}

for (var x = 0; x<=4; x++){
	for (var y = 0; y<=3; y++){
		console.log("x="+x+" y="+y);
	}
}

var i = 1;
while(i<10){
	console.log("Працює "+i);
	i++;
}

do{
	console.log("Виконається хоча б один раз "+i);
	i++;
}while(i<11);

console.log("Значення і="+i);

var count = 0;

for(var n1 = 0; n1<=999; n1++){
	for(var n2 = 0; n2 <= 999; n2++){
		var tmp_n1 = n1;
		var number1 = tmp_n1%10;

		tmp_n1 -= number1;
		tmp_n1 /=10;

		number2 = tmp_n1%10;

		tmp_n1 -= number2;
		tmp_n1 /=10;

		number3 = tmp_n1%10;

		sum1 = number3 + number2 + number1;

		var tmp_n2 = n2;
		var number4 = tmp_n2%10;

		tmp_n2 -= number4;
		tmp_n2 /=10;

		number5 = tmp_n2%10;

		tmp_n2 -= number5;
		tmp_n2 /= 10;

		number6 = tmp_n2%10;

		sum2 = number4 + number5 + number6;

		if(sum1==sum2){
			count++
		}

	}
}

console.log("Кількість щасливих квитків "+ count);

var tmp_n1 = 1;
var number1 = tmp_n1%10;

tmp_n1 -= number1;
tmp_n1 /=10;

number2 = tmp_n1%10;

tmp_n1 -= number2;
tmp_n1 /=10;

number3 = tmp_n1%10;

console.log(number1, number2, number3);




