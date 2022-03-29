const checkPrime = number => {
    for (let i = 2 ; i < number/2 ; i++) {
        if (number % i === 0) {
            return false;
        } else {
            return true;
        }
    }
}

// console.log(checkPrime(2));
// console.log(checkPrime(3));
// console.log(checkPrime(4));
// console.log(checkPrime(5));
// console.log(checkPrime(6));
// console.log(checkPrime(7));