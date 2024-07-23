// const userEmail = "aditya@ai.com" // true
// const userEmail = "" // false
const userEmail = [] // true

if(userEmail){
    console.log("got user email");
}else{
    console.log("Don't have user email");
}

/*
        falsy values :-
                    false, 0, -0, BigInt 0n, "", null, undefined, NaN 
*/
/*
        truthy values :-
                    "0", 'false', " ", [], {}, function(){} (empty function)
*/


if(userEmail.length === 0){
    console.log("Array is Empty");
}

const emptyObj = {}

if( Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

console.log(false == 0);
console.log(false == '');
console.log(0 == "");

//********************  Nullish Coalescing Operator (??): null undefined *********************

let val1;
val1 = 5 ?? 10 // 1st value get assigned
console.log(val1);

val1 = null ?? 10 // after null , 1st value get assigned
console.log(val1);

val1 = undefined ?? 15 // after undefined , 1st value get assigned
console.log(val1);

val1 = null ?? 20 ?? 30 //  after null , 1st value get assigned
console.log(val1);

// *************** Ternary Operator ************************8
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");