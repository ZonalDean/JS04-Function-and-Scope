

// let factorial = integer => {
//     let i = integer -1
//     let sum = integer * i
//     while (i > 0) {
//         if (i > 1) {    
//             i--;
//             sum = sum * i;
//         } else {
//             return console.log(sum)
//         }
//     }
// }

const factorial = value => {
    let sumFactorial = 1;
    for (let i = value ; i >= 2 ; i--) {
        sumFactorial *= i;
    }
    return sumFactorial
}

console.log(factorial(6));