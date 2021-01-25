let array = []

function newArray(enterIntNumber){
    for (let a = 0; a < enterIntNumber; a += 1){
        newNumber = Math.floor(Math.random() * 50) + 1;

        let n = newNumber.toString();
        array.push(n);
    }
    console.log('Min is ' + Math.min.apply(Math, array))
    console.log('Max is ' + Math.max.apply(Math, array))
}

//newArray(enterIntNumber)