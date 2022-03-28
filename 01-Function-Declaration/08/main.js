// function login (username,password) {
//     // username = prompt("Enter username");
//     // password = prompt("Enter password");
//     if (username === "admin") {
//         } if (password === "P@ssword") {
//             alert("Logged in");
//         } else {
//         console.log("login fail")
//     }
// };

function login (username,password) {
    if (username === "admin" && password === "P@ssword") {
        alert("Logged in")
    } else {
        alert("Failed Login")
    }
}

// username = prompt("Enter username")
// password = prompt("Enter password")
login(prompt("Enter username"),prompt("Enter password"));