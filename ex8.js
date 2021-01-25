for (let n = 1; n < 100; n += 1) {
    if (n % 7 == 0 || (n - 7) % 10 == 0 || Math.floor(n / 10) == 7 ){
    console.log('boom');
    }
    else
    console.log(n)
}

