// const calcAge = year => {
//     let sum;
//     for (i = year ; i = 2020 ; i++) {
//         if (year % 4 !== 0) sum += 365;
//         if (year % 100 !== 0) sum += 366;
//         if (year % 400 === 0) sum += 366;
//         else sum += 365;
//     } return alert(`You are ${sum} days old`)
// }

// calcAge(prompt('birth year'))

/* loop it with index starting at year, adding a year until you get to 2020
each loop check if it's leap, true = 366 false=365 */

// original not working
// \ new

const leapYear = year => {
    if (year % 4 === 0) {
        return year % 100 !== 0 ? true : year % 400 === 0;
    }
}

const calcAge = year => {
    let totalDay = 0;
    for (let i = year ; i <= 2020 ; i++) {
        if (leapYear(i)) {
            totalDay += 1*366;
        } else totalDay += 1*365;
    }
    return console.log(totalDay);
}

calcAge(prompt("birth year"));