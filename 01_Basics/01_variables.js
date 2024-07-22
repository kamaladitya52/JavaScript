const accountId = 23758673
let accountEmail = "kamaladitya52@gmail.com"
var password = "122335646"
accountCity = "Patna" // This type of declaration also be possible in JS but don't use this.
let accountState;

// accountId = 9235789725 // const variables can't be changed
console.log(accountId);

accountEmail = "aditya@gmail.com"
password = "98257319"
accountCity = "Bhubaneswar"
console.table([accountId,accountEmail,password,accountCity,accountState])

// Prefer to use let instead of var beacuse of block scope and functional scope.