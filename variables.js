const accountId = 149
let accountEmail = "adi@gmail.com"
var accountPassword = "1234"
accountCity = "kanpur"
let accountState;//value not defined

//accountId = 2 //not allowed

accountEmail = "ach@gmail.com"
accountPassword="1234566"
accountCity = "nagar"//this is possible but not preferable

//console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountEmail,accountPassword,accountCity,accountState])

