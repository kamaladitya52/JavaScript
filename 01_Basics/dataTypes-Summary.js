// DataType is basically divided into two types :- 

/* 1. Primitive
            7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
*/


// 2.  Non - Primitive or Reference
// Array, Objects, Functions

// JS is basically dynamical typed language beacuse we can't define type of data from our end for eg..
const value = 33
// we can't define score as string or number or boolean from our end

// ****************************  Primitive ********************************

const score = 45
const scoreValue = 100.3
const isLoggedIn = false
const temp= null
let userEmail 

// Symbol is used for uniqueness
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const bigNumber = 578932465n // n represent the number is BigInt


// **************************** Reference or Non-Primitive ********************************

const heros = ["shaktimaan", "naagraj", "doga"] // Array
let myObj = {
    name: "Aditya",
    age : 21
} 
// Object


const myFunction = function(){
    console.log("Hello World");
}
//Function

console.log(typeof myFunction);

// *********************************** Memory in JavaScript **********************************

// Stack (Use in Primitive types) & Heap (Used in Non-Primitive Types)
// Stack gives us a Copy whereas Heap gives us a Reference.


// Use of Stack
let myName = "Aditya"
let myFullName = myName
myFullName = "Aditya Kamal"

console.log(myName);
console.log(myFullName);


// Use of Heap

let userOne = {
    username : "userOne@gmail.com",
    password : 12345
}

let userTwo = userOne

userTwo.password = 67890

console.log(userOne.password);
console.log(userTwo.password);

// Important Note :- Both objects (userOne & userTwo) points to same Reference in Heap Memory.

