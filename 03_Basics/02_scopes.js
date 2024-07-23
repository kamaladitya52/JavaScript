//Global Scope
// var c = 300
let a = 100;

if(true){ //Local Scope
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("Inner :",a);
}

console.log(a);
// console.log(b); // No scope of b outside it's own local scope.
console.log(c); 

function one(){
    const username = "Aditya"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website); // error because outside the scope
    
    two()
}

one()

if(true){
    const username = "aditya"
    if(username === "aditya"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // no scope of website here
}
// console.log(username); // no scope of username here


console.log(addOne(8)) // Can be access before initialization
// First wat to declare function
function addOne(num){
    return num+1
}
console.log(addOne(8))

// console.log(addTwo(6)) // Cannot access before initialization
// Second way to declare function
const addTwo = function(num){
    return num+2
}
console.log(addTwo(6))