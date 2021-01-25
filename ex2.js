var readlineSync = require('readline-sync') 

function equals_10() {
    let usersAnswer1 = readlineSync.question ('can you choose a number? ');
    let usersAnswer2 = readlineSync.question ('can you choose a second number? ');

    usersAnswer1 = (1 * usersAnswer1)
    usersAnswer2 = (1 * usersAnswer2)
    let floatnumber1 = parseFloat(usersAnswer1)
    let floatnumber2 = parseFloat(usersAnswer2)

    if (10 === floatnumber1 + floatnumber2){
        console.log('makes 10');
    }

    else 
        console.log('nope');  
    }
    
equals_10();