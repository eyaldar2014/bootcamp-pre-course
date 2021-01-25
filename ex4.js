var readlineSync = require('readline-sync') 

let numberOfDiners = readlineSync.questionInt ('How many people are you going with?');

let isKosher = readlineSync.keyInYN('Should it be Kosher?');
    if (isKosher == true){
       let ifKosher = readlineSync.keyInYN('should it be Kashrut Lemehadrin?');
       if ( ifKosher === '' ){
            throw new Error("Something went badly wrong!");
    }}

    if ( isKosher === '' ){
        throw new Error("Something went badly wrong!");
    }

let foodKinds = ['asian', 'italian','fast food', 'local' , 'deserts']
let indexOfFoodKinds = index = readlineSync.keyInSelect(foodKinds,'What kind of food do you want?' )

let restaurants = ['Giraffe', 'Cicchetti', 'McDonald\'s', 'HaKosem', 'Anita']
console.log('your best retaurant in Tel Aviv will be ' + restaurants[index]);