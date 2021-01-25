// מספר ראשוני
var readlineSync = require('readline-sync') 

let n = readlineSync.questionInt('please enter a positive number');
if(n > 0){
console.log(1)
for (a = 1; a < n + 1; a += 1){
    counter = 0
    for (q = 1 ; q < a + 1 ; q += 1){
        if (a % q == 0){
            counter += 1
        }
        }
        if (counter == 2){
            console.log(a)
        }
    }}