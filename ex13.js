var readlineSync = require('readline-sync') 

let text = readlineSync.question('please write something');
let textArrayWords = []

function onlyWords(){
text = text.split("");
for (let char = 0; char < text.length; char +=1){
if (text[char] >= 'A' && text[char] <= 'Z' || text[char] ===  ' '){
textArrayWords.push(text[char]);
}
else if (text[char] <= 'z' && text[char] >= 'a'){
    textArrayWords.push(text[char]);
}
else (textArrayWords.push(' '));
}
textArrayWords = textArrayWords.join("");
return textArrayWords;
}

onlyWords()

textArrayWords = textArrayWords.split(' ');

let longestWord = textArrayWords.sort(
    function (a, b) {
        return b.length - a.length;
    }
)[0];

console.log(longestWord)
