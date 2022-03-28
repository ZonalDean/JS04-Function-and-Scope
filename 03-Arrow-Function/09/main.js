let leapYear = year => {
    if (year % 100 === 0 && year % 400 === 0) {
        console.log("Yes");
    } else if (year % 100 === 0) {
        console.log("No")
    } else if (year % 4 === 0) {
        console.log("Yes") 
    } else {
        console.log("No")
    }
}

leapYear(2); // no
leapYear(4); // yes
leapYear(100); // no
leapYear(400); // yes
