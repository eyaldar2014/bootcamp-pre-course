var readlineSync = require('readline-sync') 

let text = readlineSync.question('please write something');
let res = text.replace(/ /g, "*");
console.log(res)