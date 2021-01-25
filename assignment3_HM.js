var readlineSync = require('readline-sync') 

var figlet = require('figlet');
console.log(figlet.textSync('HANG MAN', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 150,
    whitespaceBreak: true
}));

let wordSelection = ['batata' , 'success', 'dog' , 'enciclopedia']
let chosenWord = wordSelection[Math.floor(Math.random() * 4)] ;
let chosenWordArray = chosenWord.split("")
let asterixChosenWord = chosenWord.replace(/./gi, '*');
let asterixChosenWordArray = asterixChosenWord.split("")

console.log('\nyou have 10 guesses\nThe word is:\n' + asterixChosenWord)

let attempt = 0
let userGuesses =[]

var userGuess = readlineSync.question('What is your guess?');

userGuessCheck()

function userGuessCheck(){
    if(userGuess.length > 1){
        userGuess = readlineSync.question('please enter only one charachter:');
        return userGuessCheck()
    }
    else if ( userGuess >= 'A' && userGuess <= 'Z'){
        userGuess = userGuess.toLowerCase();
        if (userGuesses.indexOf(userGuess) > -1){
            userGuess = readlineSync.question('already tried that. enter a new guess(no attempt was lost) : ');
            return userGuessCheck()
        }
        userGuesses.push(userGuess)
        return userGuess
        }
    else if (userGuess <= 'z' && userGuess >= 'a'){
        if (userGuesses.indexOf(userGuess) > -1){
            userGuess = readlineSync.question('already tried that. enter a new guess(no attempt was lost) : ');
            return userGuessCheck()
        }        
        userGuesses.push(userGuess)
        return userGuess
        }
    else userGuess = readlineSync.question('please enter a valid guess(no attempt was lost) : ');
        return userGuessCheck()
}

function checkAttemp(){
    if ((chosenWordArray.indexOf(userGuess) === -1)){
        attempt += 1
        console.log('you guessed poorly!')
    }
    if ((chosenWordArray.indexOf(userGuess) > -1)){
        console.log('you guessed well!')
        for (a = 0 ; a < chosenWord.length; a+=1){
            if (userGuess === chosenWordArray[a]){
                asterixChosenWordArray[a] = chosenWordArray[a]
            }
        }
    }
}
function userChoice(){
    answerOptions = ['a single letter' , 'The entire word (careful! lost the word, lost the game)']
    indexAnswerOptions = readlineSync.keyInSelect(answerOptions,'What would you prefer doing?' )
    if (indexAnswerOptions === 0){
        userGuess = readlineSync.question('What is your guess?');
        userGuessCheck()
    }
    else if (indexAnswerOptions === 1){
        var userEntireWordGuess = readlineSync.question('What do you think the word is?');
        if (userEntireWordGuess === chosenWord){
            console.log('\nThe word is ' + chosenWord + '\nwell done! you Won!')
            attempt = 10
        }
        else console.log('sorry but that is not the word. you lost. game over!')
        attempt = 10
    }
}
    
while (attempt < 10){
    checkAttemp()
    
    if (attempt === 10){
        console.log('no more guesses, you lost. game over')
        return
    }
    if (chosenWordArray.join("") === asterixChosenWordArray.join("")){
        console.log('\nThe word is ' + chosenWord + '\nwell done! you Won!')
        return
    }
    console.log('\nyou have ' + (10 - attempt) + ' guesses left\nthe word is ' + asterixChosenWordArray.join(''))
    userChoice()
}







