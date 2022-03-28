

let factorial = integer => {
    let i = integer -1
    let sum = integer * i
    while (i > 0) {
        if (i > 1) {    
            i--;
            sum = sum * i;
        } else {
            return console.log(sum)
        }
    }
}

factorial(prompt('insert number'));