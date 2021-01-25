var readlineSync = require('readline-sync') 

function palindromeCheck(){
    let text = readlineSync.question('please write something');
    let reversetext = text.split("").reverse().join("");
    if (text === reversetext){
    return true;
    }
    else
    return 'not a palindrome';
}

console.log(palindromeCheck());
