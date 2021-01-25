var readlineSync = require('readline-sync') 

function capVowel(){
    let text = readlineSync.question('please write something');
    text = text.replace(/a/g, "A");
    text = text.replace(/e/g, "E");
    text = text.replace(/i/g, "I");
    text = text.replace(/o/g, "O");
    text = text.replace(/u/g, "U");
    text = text.replace(/y/g, "Y");
    return text;    
}

console.log(capVowel())