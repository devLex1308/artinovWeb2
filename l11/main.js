console.log("Main.js");

function Dot(){
	this.init = function(){

	};
	this.up = function(){
		console.log("up");
		return this;
	};
	this.down = function(){
		console.log("down");
		return this;
	};
	this.init();
}


let  dot = new Dot();

//dot.up().up().down().up().down().down();
dot = 1;


// for(let i = 1; i <= 5; i++){

// 	setTimeout(function(){
// 		console.log(i);
// 	},i*1000);
// }

// const objConst = {
// 	name: 'Alex',
// 	age: 28
// };

// objConst.name = 'Ivan';

// objConst = 1;

// console.log(objConst);

// let arrNames = ["Alex", "Ivan", "Ira", 'Test', 'rrr'];

// let [ ,, name5655,name2,name3] = arrNames;

// // name5655 = arrNames[2];

// console.log(name5655,name2,name3);

// let name = 'Alex';
// let age = 28;
// let city = 'Vinnitsa'

// let obj = {
// 	name,
// 	age,
// 	city
// }

// console.log(obj);

let obj = {
	test2: 355,
	a: true,
	name: "Sasha",
	arr: [9,8,7,6],
	sum: function(a,b){
		return a+b;
	},
	powTo2: () => {console.log('Привіт з стрілочної функції')}

}

function save(value){
	return () => value;
}

let s = save('Цінні дані');

console.log(s());

console.log(obj);

let [var1, var2] = [9,8,7,6];

let {arr:[ , , ,number]} = obj;

console.log(number);

// function a({name = 'Анонім', lastnane = 'Анонімович'}){
	
// 	console.log(name, lastnane);
// }

// a(obj);

console.log(obj.sum(7,3));
console.log(obj.powTo2(4));

function help(){
	return "Якесь значення";
}

let i = -1;
let a = (i>0) ? "Позитивне значення" : i==0 ? 'Нуль' : "Негативне значення";

if(i>0){
	a = "Позитивне значення";
}else{
	if(a==0){
		a = "Нуль";
	}else{
		a = "Негативне значення";
	}
}

console.log(a);

function Dot(){
	this.init = function(){

	};
	this.up = function(){
		console.log("up");
		return this;
	};
	this.down = function(){
		console.log("down");
		return this;
	};
	this.init();
}

class NewDot{
	up(){
		console.log("up");
	}

	down(){
		console.log("down");
	}
}

let newDot = new NewDot();

newDot.up();

class Animal{
	constructor(name){
		this.name = name;
		// this.food = null;
	}
	eat(){ 
		console.log( `${this.name} їсть ${this.food}`);
	}
	sleep(){
		console.log('тваринка спить');
	}
	say(){
		console.log('Якийсь звук');
	}

	static getPi(){
		return 3.14;
	}
	// get food(){
	// 	return this.food;
	// }

	// set foot(value){
	// 	this.food = value;
	// }
}

class Cat extends Animal{
	hunting(){
		console.log('підем ловити мишей');
	}
	say(){
		super.say();
		console.log("це звук м'яв");
	}
}




console.log(Animal.getPi());
let anim = new Cat("Мурчик");

console.log(anim.name);

anim.hunting();
anim.say();


let arrNames = ["Alex", "Ivan", "Ira", 'Test', 'rrr'];

let [v1, v2, ...all] = arrNames;

console.log(v1, v2, all);

function test(a,b){
	console.log(a);
	console.log(b);
	//console.log(c);
}

test(...all);

function test2(...arr){
	console.log(arr);
}

test2(12,23,true,'Hi');

let all2 = [4,5,6,9]

let copyAll = [...all,'Hi',...all2];
copyAll[0] = 1;

console.log(copyAll);
console.log(all);

let o = {
	name: 'Ira',
	city: 'Kiev'
}

let oCopy = {...o};

o.name = 'Наташа';

console.log(oCopy);
console.log(o);