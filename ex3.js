var readlineSync = require('readline-sync') 

let chosenNumber = readlineSync.questionInt ('please choose a number between 0 to 9 ');

let numbersList = {
    0: 'ZERO',
    1: 'ONE',
    2: 'TWO',
    3: 'THREE',
    4: 'FOUR',
    5: 'FIVE',
    6: 'SIX',
    7: 'SEVEN',
    8: 'EIGHT',
    9: 'NINE'
}

console.log(numbersList[chosenNumber])
