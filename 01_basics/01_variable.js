const accountId = 12345
let accountEmail = "suman@gmail.com"
var accountPassword = "345566"
accountCity = "Jaipur"

//accountId = 2 //not allowed

accountEmail = "scad@n.com" 
accountPassword = "14556"
accountCity = "Bengaluru"
let accountstate;

/*
Prefer not to use var because of issue in block scope and functional acope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])

//const = const can't change


let name = "suman";
roll  = 480;
const dob = "01-01-200078";
console.table([name,roll,dob])

 let temp = null
 let temp2;
 // here temp2 has default value undefined and temp has null value 
 

/* prefer not to use var as it is function scoped and can lead to unexpected
 behavior due to hoisting. Instead, use let
 for variables that may change and const for variables that should not be reassigned. */