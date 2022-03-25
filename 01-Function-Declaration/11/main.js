

// function sayHi(age) {
//   if (age < 12) alert("Hi kid");
// }
// // console.log(sayHi); // * nothing happens because this is not how tou call a function
// console.log(sayHi(10)); // ** hi kid because age below 12



function sayHi(name) {
  if (name) {
    alert("Hi " + name);
    return;
  } else {
    return "Who are you";
  }
}
// console.log(sayHi("John")); // *** Hi John
console.log(sayHi()); // **** cosnole log who are you, message is not printed because no alert in function

