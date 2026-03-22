const accountId = 12345
let accountEmail = "suman@gmail.com"
var accountPassword = "345566"
accountCity = "Jaipur"

//accountId = 2 //not allowed

accountEmail = "scad@n.com" 
accountPassword = "14556"
accountCity = "Bengaluru"
let accountstae;

/*
Prefer not to use var because of issue in block scope and functional acope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])