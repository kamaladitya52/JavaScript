let score = "33"
// let score = "33abc"
// let score = null
// let score = undefined
// let score = true
// let score = false

console.log(typeof score)
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber)

// score -> output :-
// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true = 1, false = 0


// let isLoggedIn = 1
// let isLoggedIn = 0
let isLoggedIn = ""
// let isLoggedIn = "Aditya"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true, 0 => fasle
// "" = false
// "Aditya" = True

let someNumber = 52
let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);


// *********************** Operations ***************************

let value = 3
let negvalue = -value
console.log(negvalue);

// console.log(2+2); // Add
// console.log(2-2); // Subtract
// console.log(2*3); // Muntiply
// console.log(2/2); // Division
// console.log(2**4); // Power
// console.log(2%3); // Remainder


let str1 = "Hello,"
let str2 = " Aditya"

let str3 = str1 + str2
console.log(str3);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log((3 + 4) * 5 % 3);


console.log(true);
console.log(+true);
// console.log(true+); // Error
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100;
gameCounter++
++gameCounter
console.log(gameCounter);