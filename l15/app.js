const { pi, users } = require('./module');


let l1 = require('./module').local;
let l2 = require('./module').local;

l1.name = 'Ira';

// let f =  require('./module').setLocal;

// f(3);

// console.log('Виконавчий файл', name, age, pi);
console.log(l1, l2);