// var hello = function (name) {
// 	console.log("Hi " + name);
// }

function hello(name) {
	console.log("Hi " + name);
}

var obj = {
	name: 'Alex',
	age: 28,
	hi: hello,
	sum: function(a,b){
		var s = a + b;
		return s;
	},
	by:function(name){
		console.log("By " + name);
	},
	method:function(){
		this.hi(this.name);
		this.by(this.name);
	}
};

hello("Ivan");

obj.name = "Kostia";

obj.method();

var sum = obj.sum(3,4);

console.log(sum);

function greeting(name){
	var _name = name;
	function hi(s){
		console.log( s + ", " + _name);
	}

	return hi;
}

var hi2 = greeting("Misha");

hi2("Hi");
hi2("Привіт");
hi2("Бувай");

function counter(){
	var count = 0;

	function up(){
		console.log("Up");
		count++;
		console.log("count =", count);
	}

	function down(){
		console.log("Down");
		count--;
		console.log("count =", count);
	}

	function reset(){
		console.log("Reset");
		count = 0;
		console.log("count =", count);
	}

	var obj = {
		up: up,
		down: down,
		reset: reset
	}

	return obj;
	up();
	up();

	console.log("count = ", count);	

}

function counter(){
	var count = 0;

	return {
		up: function(){
				console.log("Up");
				count++;
				console.log("count =", count);
			},
		down: function(){
				console.log("Down");
				count--;
				console.log("count =", count);
			},
		reset: function (){
				console.log("Reset");
				count = 0;
				console.log("count =", count);
			}
	};
}



var c = counter();

c.up();
c.up();
c.down();
c.reset();

// greeting("Misha")("By");
