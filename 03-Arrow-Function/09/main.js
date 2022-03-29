// let leapYear = year => {
//     if (year % 100 === 0 && year % 400 === 0) {
//         console.log("Yes");
//     } else if (year % 100 === 0) {
//         console.log("No")
//     } else if (year % 4 === 0) {
//         console.log("Yes") 
//     } else {
//         console.log("No")
//     }
// }

// ^ orginal
// \ new (shorter)

const leapYear = year => {
    // if (year % 4 !== 0) return false; // not divisible by 1 = false; if divisble will make 1900 true, cuts out those which are cleary wrong
    // if (year % 100 !== 0) return true; // not divisble by 100 = true; accept all units which are not 100
    // // if (year % 400 === 0) return true;
    // // return false;
    // return year % 400 === 0; // divisble by 400 = true; the remaing values can all only be divisble by 100

    // super short
    if (year % 4 === 0) {
        return year % 100 !== 0 ? true : year % 400 === 0;
        // return year % 100 !== 0 || year & 400 === 0; // || is used because OR returns the first truthy value
    }
};

leapYear(2); // no
leapYear(4); // yes
leapYear(100); // no
leapYear(400); // yes
