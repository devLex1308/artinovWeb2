// console.log("-------------");
// console.log("It is Node.js");
// console.log("-------------");

// console.log(1);
// setTimeout(()=>{
//    console.log(2);
// }, 200);

// setTimeout(()=>{
//    console.log(3);
// }, 100);

// console.log(4);

// console.log(__dirname);
// console.log(__filename);


// function a(){
// 	console.log(arguments);
// };


// a(1,"dfsdf", false);

// let arg = process.argv;

// console.log("arg = ", arg);

// console.log("Сума д1 та д2 ", +arg[3] - +arg[5]);

const fs = require("fs");

//console.log(fs);

function getValue(key){
	let index = process.argv.indexOf(key);
	if (index == -1){
		return null;
	}else{
		return process.argv[index + 1];
	}
}

// let d1 = getValue("-d1");
// let d2 = getValue("-d2");

// console.log(d1 - d2);

let name = getValue('-n');
let pass = getValue('-p');

console.log('name=', name ,' pass=', pass);

let db = [];
db.push({name: 'Lex', pass: 234});
db.push({name:'Ira', pass:3555});
db.push({name, pass});

let string = JSON.stringify(db);

let stringObj = '{"name": "Sasha","pass":"1234"}';

// try{

// 	let obj = JSON.parse(stringObj);

// } catch (error){
// 	console.log(error);
// }

//console.log(db);
// console.log(string);
//console.log(obj);

// fs.writeFile("db.txt", string, (error) => {

// 	if(error){
// 		console.log('Неможливо записати файл');
// 	}

// 	console.log('Файл мав записатись');
// });





const stdin = process.stdin;
const stdout = process.stdout;

console.log("Якщо ви хочете додати користувача введіть 1");
console.log("Якщо ви хочете зайти введіть 2");

stdin.on("data", d => {
	let convertD = parseInt(d.toString());
	switch(convertD){
		case 1:
			addUser(d);
			break;
		case 2:
			checkUser(d);
			break;
		default: 
			console.log("Команда не коректна");
	}
});


function addUser(d){
	let arr = d.toString().split(" ");
	let name = arr[1];
	let pass = parseInt(arr[2]);

	fs.readFile('db.txt', 'utf-8', (error, data) => {
		if(error){
			return console.log('Прочитати файл');
		}

		let rez = null;
		try{
			rez = JSON.parse(data);
		}catch(e){
			console.log("Неможливо роспарсити стрічку");
		}

		rez.push({name, pass});
		console.log(rez);

		let stringRez = JSON.stringify(rez);
		fs.writeFile("db.txt", stringRez, (error) => {

			if(error){
				console.log('Неможливо записати файл');
			}

			console.log('Файл мав записатись');
		});
	});

 

	console.log(name, pass);
}

function checkUser(d){
	let arr = d.toString().split(" ");
	let name = arr[1];
	let pass = parseInt(arr[2]);

	fs.readFile('db.txt', 'utf-8', (error, data) => {
		if(error){
			return console.log('Прочитати файл');
		}

		let rez = null;
		try{
			rez = JSON.parse(data);
		}catch(e){
			console.log("Неможливо роспарсити стрічку");
		}

		//let users = rez.find(item => true);
		let haveUser = false;

		for(let i = 0; i < rez.length; i++){
			if(rez[i].name == name && rez[i].pass == pass ){
				haveUser = true;
				break;
			}
		}
		
		if(haveUser){
			console.log("Ласкаво просимо на сайті");
		} else {
			console.log("Користувача немає");
		}
	});
}