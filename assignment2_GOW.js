var readlineSync = require('readline-sync') 

console.log('//////------Welcome To War------\\\\\\')
let playerName = readlineSync.question('please enter your name: ');
console.log('\nWelcome ' + playerName +' To the Game Of War !\nYour starting cash amount will be 50 ILS.')
let playerCash = 50
let gameChoice = ['Play with computer', 'play with a friend']
let indexOfGames = index = readlineSync.keyInSelect(gameChoice,'How would you like to play?' )
if(indexOfGames === 0){
    computerMatch()
}
if(indexOfGames === 1){
    var secondPlayerName = readlineSync.question('please enter your friends name: ');
    console.log('\nWelcome ' + secondPlayerName +' To the Game Of War !\nYour starting cash amount will be 50 ILS.')
    var secondPlayerCash = 50
    twoPlayersMatch()
}

function computerMatch(){
    let playerBet = readlineSync.questionInt('\nPlace your bet for the next round: 1 to ' + playerCash + ' : ');
if (playerCash < playerBet || playerBet < 1){
    console.log('I said between 1 to ' + playerCash +' And you typed ' + playerBet + '!!\nI don\'t play with liars!!! Bye')
return
}
let suits = ["♦", "❤", "♠", "♣"];
let secondSuits = ["♦", "❤", "♠", "♣"];
let cardSuit = suits[Math.floor(Math.random() * 4)] ;
let secondCardSuit = secondSuits[Math.floor(Math.random() * 4)] ;
let playerCard = Math.floor(Math.random() * 12) + 1
let computerCard = Math.floor(Math.random() * 12) + 1

console.log('\nYour card is ' + playerCard + cardSuit + ' and my card is ' + computerCard + secondCardSuit)
if (computerCard === playerCard){
    console.log('It\'s a draw! you still have ' + playerCash + ' left\nYou can play another round')
}
if(computerCard > playerCard){
    playerCash = playerCash - playerBet
    if (playerCash === 0){
        console.log('You lost and now you have 0\nYou are broke... Bye Bye')

    }
    else console.log('You lost and now you have ' + playerCash)
}
if(computerCard < playerCard){
    playerCash = playerCash + playerBet
    console.log('You Won! and now you have ' + playerCash)
}
if(playerCash > 0){
    let playerChoice = ['Play another round', 'leave with my money :-)']
    let indexOfplayerChoices = index = readlineSync.keyInSelect(playerChoice,'What would you like to do?' )
if(indexOfplayerChoices === 0){
    computerMatch()
}
if(indexOfplayerChoices === 1){
    console.log('\nYou  have ' + playerCash + ' left\nBye Bye')
return
}
}
}

function twoPlayersMatch(){
let playersCash = 50
if (playersCash > secondPlayerCash){
playersCash = secondPlayerCash
}
else if (playersCash < secondPlayerCash){
playersCash = playerCash
}
let playerBet = readlineSync.questionInt('\nPlace your bet for the next round: 1 to ' + playersCash + ' : ');
if (playersCash < playerBet || playerBet < 1){
    console.log('I said between 1 to ' + playersCash + ' And you typed ' + playerBet + '!!\nI don\'t play with liars!!! Bye')
    return
}
let suits = ["♦", "❤", "♠", "♣"];
let secondSuits = ["♦", "❤", "♠", "♣"];
let cardSuit = suits[Math.floor(Math.random() * 4)] ;
let secondCardSuit = secondSuits[Math.floor(Math.random() * 4)] ;
let playerCard = Math.floor(Math.random() * 12) + 1
let secondPlayercard = Math.floor(Math.random() * 12) + 1

console.log('\n' + playerName + ' card is ' + playerCard  + cardSuit+ ' and ' + secondPlayerName + ' card is ' + secondPlayercard + secondCardSuit)
if (secondPlayercard === playerCard){
    console.log('It\'s a draw! ' + playerName + ' still have ' + playerCash + ' left and ' +secondPlayerName+' still have ' + secondPlayerCash +'\nYou can play another round')
}
if(secondPlayercard > playerCard){
    playerCash = playerCash - playerBet
    secondPlayerCash = secondPlayerCash + playerBet
console.log(playerName + ' lost the round and now he has ' + playerCash + '\n' + secondPlayerName + ' won the round and now he has ' + secondPlayerCash)
}
if(secondPlayercard < playerCard){
    playerCash = playerCash + playerBet
    secondPlayerCash = secondPlayerCash - playerBet
console.log(secondPlayerName + ' lost the round and now he has ' + secondPlayerCash + '\n' + playerName + ' won the round and now he has ' + playerCash)
}
if (playerCash === 0){
    console.log('\nGame is over - '+secondPlayerName+ ' Won!')

}
if (secondPlayerCash === 0){
    console.log('\nGame is over - '+playerName+ ' Won!')

}
if (playerCash > 0 && secondPlayerCash > 0){
let playerChoice = ['Play another round', 'leave with my money :-)']
let indexOfplayerChoices = index = readlineSync.keyInSelect(playerChoice,'What would you like to do?' )
if(indexOfplayerChoices === 0){
    twoPlayersMatch()
}
if(indexOfplayerChoices === 1){
    console.log('\n'+ playerName + ' has ' + playerCash + ' left\n' + secondPlayerName + ' has ' + secondPlayerCash + ' left\nBye Bye')
return
}
}
}
