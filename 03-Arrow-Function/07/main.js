let remainderSeven = i => {
    if (i % 7 === 0) {
        alert("This integer is divisble by 7");
    } else {
        alert("No");
    }
}

remainderSeven(prompt('Insert integer'))