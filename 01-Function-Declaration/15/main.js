function magic() {
    return function (x) {
      return x * 42;
    };
  }
const answer = magic();
console.log(answer); // * returns the function
console.log(answer(1337)); // ** returns thbe product of 1337 * 42
console.log(magic(1337)(42)); // ***  no idea why 42*42 because first calls magiv which is empty and the the second parameter goes into first class higer order function