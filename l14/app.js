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

try{

	let obj = JSON.parse(stringObj);

} catch (error){
	console.log(error);
}

//console.log(db);
console.log(string);
//console.log(obj);

fs.writeFile("db.txt", string, ()=>{
	console.log('Файл мав записатись');
});