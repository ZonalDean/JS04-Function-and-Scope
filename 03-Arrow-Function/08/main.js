let points = (team1 , team2) => {
    if (team1 > team2) {
        return 3
    } else if (team1 === team2) {
        return 1
    } else {
        return 0
    }
};

alert(points(1,2))
alert(points(1,1))
alert(points(2,1))