// let day;
// let month;
// let year;

// let leapYear = year => {
//     if (year % 100 === 0 && year % 400 === 0) {
//         return year = true
//     } else if (year % 100 === 0) {
//         return year = false
//     } else if (year % 4 === 0) {
//         return year = true
//     } else {
//         return year = false
//     }
// };

// let monthInDays = (month,year) => {
//     leapYear(year);
//     if (year == true && month == 2) {
//         month = month *  29
//     } else if (year == false && month == 2) {
//         month = 
//     }
// }

// function remain(day, month, year) {
// }

// let calc = (day, month, year) => {
// }


let monthDays = (month,yearLeap) => {
    let monthInDays = 0;
    month = 2;
    leapYear = false;

    for ( i = 0 ; i < month ; i++) {
        if (i === 2 || yearLeap) {
            monthInDays += 29;
        } else if (i === 2 || !yearLeap) {
            monthInDays += 28;
        } else if (i % 2 === 0) {
            monthInDays += 31; 
        } else {
            monthInDays += 30;
        }
    }
    return monthInDays
}

console.log(monthDays(2,false))