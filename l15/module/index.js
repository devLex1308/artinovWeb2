const {pi} = require('./db');
const {users} = require('./users');

let local = {name:'Alex', age:34};

function setLocal(val){
	local = val;
}

module.exports.local = local;
module.exports.setLocal = setLocal;
module.exports.users = users;
module.exports.pi = pi;