function magic() {
    return function (x) {
      return x * 42;
    };
  }
const answer = magic();
console.log(answer); // * returns the function
console.log(answer(1337)); // ** returns thbe product of 1337 * 42
console.log(magic(1337)(42)); // ***  no idea whyt