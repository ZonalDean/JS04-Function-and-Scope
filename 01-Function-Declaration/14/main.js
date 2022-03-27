function max(a, b, c, d) {
    (a = undefined ? a = 0 : a = a);
    (b = undefined ? b = 0 : b = b);
    (c = undefined ? c = 0 : c = c);
    (d = undefined ? d = 0 : d = d);
    if (a > b && a > c && a > d)
        return a;
    if (b > a && b > c && b > d)
        return b;
    if (c > a && c > b && c > d)
        return c;
    if (d > b && d > c && d > a)
        return d;
};

console.log(max()); // undefined
console.log(max(2)); // 2
console.log(max(3, 1)); // 3
console.log(max(7, 3, 9, 2)); // 9