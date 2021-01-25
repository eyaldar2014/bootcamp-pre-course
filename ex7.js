var readlineSync = require('readline-sync') 

let chosenPositiveNumber = readlineSync.questionFloat('please enter a positive number');

if (chosenPositiveNumber % 1 == 0){
let sum = 1
for (let a = 1 ; a < chosenPositiveNumber + 1; a += 1){
    sum = sum * a
}
console.log(sum)
}
else factorial(chosenPositiveNumber)
function gamma(n) {
    var g = 7,
        p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if(n < 0.5) {
      return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
    }
    else {
      n--;
      var x = p[0];
      for(var i = 1; i < g + 2; i++) {
        x += p[i] / (n + i);
      }
      var t = n + g + 0.5;
      return Math.sqrt(2 * Math.PI) * Math.pow(t, (n + 0.5)) * Math.exp(-t) * x;
    }
  }
  
  function factorial(n) {
    console.log(gamma(n + 1))
  }
