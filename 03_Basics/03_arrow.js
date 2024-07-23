const user = {
    username: "Aditya",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // this refers to current context
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this); // gives empty object because of global scope. But in browser console gives window object

// function chai(){
//     let username = "Aditya"
//     console.log(this.username); // prints undefined and this only works on object
// }

// chai()

// const chai = function(){
//     let username = "Aditya"
//     console.log(this.username); // prints undefined and this only works on object
// }
// chai()

// ******* Arrow Function ***********************88
//  () => {     }
const chai = () => {
    let username = "Aditya"
    console.log(this); // gives empty object
    console.log(this.username); // prints undefined and this only works on object
}
chai()

const addTwo = (num1,num2) =>{
    return num1 + num2  // Explicitly return
}
console.log(addTwo(5,7));

// const addThree = (num1,num2,num3) => num1 + num2 +num3 // Implicit return (without return statement in single line)
const addThree = (num1,num2,num3) => (num1 + num2 +num3) // Implicit return (without return statement in single line)
console.log(addThree(3,5,7))

const add = (num1,num2) => ({username: "aditya"}) // returns object or way to return object
console.log(add(5,8))
