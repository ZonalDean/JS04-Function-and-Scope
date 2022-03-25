// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm("Did parents allow you?");
//     }
//   }

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } if (age < 18) {
//         return confirm("Did parents allow you?");
//     }
// }

// function checkAge(age) {
//     return (age > 18 ? true : confirm("Did parents allow you?"))
// }

function checkAge(age) {
    true || confirm("Did parents allow you") = age > 18 || age < 18  
}

let age = prompt("How old are you")

checkAge(age);