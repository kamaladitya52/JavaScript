// singleton
//Object.create

// object literals

const mySym1 = Symbol("key1") // Declaration of symbol 
const mySym2 = Symbol("key2") // Declaration of symbol

const user = {
    name : "Aditya",
    "full name" : "Aditya Kamal",
    mySym1: "myKey1", // wrong syntax to declare symbol.
    [mySym2]: "myKey2", // correct syntax to declare symbol. Use square bracket for symbol key.
    age: 21,
    location: "Patna",
    email : "kamaladitya52@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(user);
console.log(user.email); // First way to access value using '.key' 
console.log(user["name"]); // Second way to access value using '["key"]'

// console.log(user.full name); wrong way to access. Throws error
console.log(user["full name"]); // only one way to access this. 

console.log(user.mySym1);
// console.log(typeof user.mySym1); // gives string type.

console.log(user[mySym2]);
// console.log(typeof user[mySym2]);  // gives string type.

user.email = "adityakamal@yahoo.in" // to change the value or to update the value
// Object.freeze(user) // lock or freeze the object and no changes occurs further.
user.email = "adityakamal@gmail.in"
console.log(user);

user.greeting = function(){
    console.log("Hello, User");
}
user.greetingTwo = function(){
    console.log(`Hello, User ${this.name}`); // String Interpolation -> Using ` `  (Back Ticks and ${})
    // use this keyword when accesing same or current object
}

// console.log(user.greeting); // Function Reference -> [Function (anonymous)]
console.log(user.greeting());
console.log(user.greetingTwo());
