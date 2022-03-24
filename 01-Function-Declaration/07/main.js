// function min(x,y) {
//     i = x + y;
//     do {
//         i--;
//         check = i >= x && i >= y;
//     } while (check)
//     console.log(i);
// }

// function min(x,y) {
//     let i = (x + y);
//     while (i >= x && i >= y) {
//         if ( i >= x) {
//             i--;
//         } else if ( i >= y) {
//             i--;
//         } else {
//             console.log(i)
//         }
//     }
// }

function min(x,y) {
    let i = x + y;
    for (i ; i >= y ; i--);
    for (i ; i >= x ; i--);
    console.log(i);
}

// min(5,8);

min(8,6);