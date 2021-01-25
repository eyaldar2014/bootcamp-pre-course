var readlineSync = require('readline-sync') 

let chosenNumber = readlineSync.questionInt('please choose a number larger than 10');
if (chosenNumber <= 10){ 
    while (chosenNumber <= 10) {
    let chosenNewNumber = readlineSync.questionInt('please choose a number LARGER than 10');
    chosenNumber = chosenNewNumber
    }}
if (chosenNumber > 10){
    console.log('thank you')    
    }