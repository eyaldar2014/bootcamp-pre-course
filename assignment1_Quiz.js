//  I used some tricks to make the answers impossible to guess:\
//- Mixed use of the array index values as negative and positive to change the value of the answers from bottom to top\
//- The last question is a trap, to equate to zero the total score\
//- A significant question has more points than other questions\
//- I made sure that choosing the highest answer(4) won't help getting the best score}



var readlineSync = require('readline-sync') 

console.log('Welcome To The Quiz Of Your Life ! \nIt\'s All About Cars !\n--------------------')

console.log('First Question :\n--------------------')
driverType = ['Classic', 'Old', 'Israeli' , 'Fast and Furious']
indexdriverType = readlineSync.keyInSelect(driverType,'What kind of a driver R U?' )
sum = indexdriverType 

console.log('\n--------------------\nSecond Question :\n--------------------')
carsMusic = ['Psychedelic', 'Rock&Roll Baby', 'Jazz', 'Classical']
indexcarsMusic = readlineSync.keyInSelect(carsMusic,'What kind of car\'s DJ R U?' )
sum = (4 - indexcarsMusic) + sum

console.log('\n--------------------\nThird Question :\n--------------------')
notAcar = ['ANOTHER CAR!','Train', 'Helicopter' , 'I\'ll Walk']
indexnotAcar = readlineSync.keyInSelect(notAcar,'and IF you car is broken?' )
sum = (4 - indexnotAcar) + sum 

console.log('\n--------------------\nFourth Question :\n--------------------')
carColor = ['Gorgeous!' , 'Pearl White', 'Darkest Black', 'Sky Blue']
indexcarColor = readlineSync.keyInSelect(carColor,'What about the CoLoR?' )
sum = (4 - indexdriverType) + sum 

console.log('\n--------------------\nFifth Question :\n--------------------')
carAddict = ['Passion', 'Beauty', 'any 4 wheels and an engine' , 'a machine']
indexcarAddict = readlineSync.keyInSelect(carAddict,'What is your Definition of a car?' )
sum = (4 -indexcarAddict) + sum 

console.log('\n--------------------\nSixth Question :\n--------------------')
carYear = ['Old one with a story', 'Only New', 'Not important - The one I can afford', 'The one I own is just the best, period']
indexcarYear = readlineSync.keyInSelect(carYear,'How old you prefer your car?' )
sum = (4 - indexcarYear) + sum 

console.log('\n--------------------\nSeventh Question :\n--------------------')
carPrice = ['Billion dollars', 'Million Shekels', 'not sure - but cost less than my house', 'cheaper is better - Stop Consumery!']
indexcarPrice = readlineSync.keyInSelect(carPrice,'How expensive is your fantasy car?' )
sum = (4 - indexcarPrice) + sum 

console.log('\n--------------------\nEighth Question :\n--------------------')
carCamp = ['Porsche - it\'s not about comfort but about dreams', 'a good style campervan of course', 'A Truck or a Tiny house', 'Forget about it...']
indexcarCamp = readlineSync.keyInSelect(carCamp,'If you had to sleep in your car - which one would you choose?' )
sum = (4 - indexcarCamp) + sum 

console.log('\n--------------------\nNinth Question :\n--------------------')
carPassion = ['hmmmm, I rather not answer', 'yeah', 'A lot. it\'s an addiction', 'More than anything']
indexcarPassion = readlineSync.keyInSelect(carPassion,'Do U Love CARS?' )
sum = 2 * indexcarPassion + sum 

console.log('\n--------------------\nTenth Question :\n--------------------')
carTypes = ['Toyota Prius !', 'Land Cruiser', 'Lamborghini', 'Rolls-Royce']
indexcarTypes = readlineSync.keyInSelect(carTypes,'What is your Dream-Car?' )
sum = indexcarTypes * sum 

if (0 == sum){
    console.log('\n~~~~~~~~QUIZ RESULTS~~~~~~~~\ncome on mate! all this trouble for a TOYOTA PRIUS???')
}
if (sum > 48){
    console.log('\n~~~~~~~~QUIZ RESULTS~~~~~~~~\nYou really LOVE cars! one day you will have your own car collection!')
}
else if (sum > 0){
    console.log('\n~~~~~~~~QUIZ RESULTS~~~~~~~~\nnot sure if you love cars OR music better. well, at least you havn\'t chose a TOYOTA!')
}
