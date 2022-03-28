// const checkPermission = function(role,yes,no) {
//     if (role === "ADMIN") {
//         yes();
//     } else {
//         no();
//     }
// }

// checkPermission(
//     'NO ADMIN', 
//     function(){
//         alert('ACCESS GRANTED');
//     },
//     function() {
//         alert('ACCESS DENIED');
//     }
// );

function yes() {
    alert('ACCESS GRANTED');
}
function no() {
    alert('ACCESS DENIED')
}

let checkPermission = (role, yes, no) => {
    if (role === 'ADMIN') {
        yes; 
    } else {
        no;
    }
}

checkPermission('ADMIN',yes(),no())