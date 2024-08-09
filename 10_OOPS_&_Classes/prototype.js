// let myName = "Aditya        "
// let myChannel = "chai   "
// console.log(myName.trueLength); // we can define our own property or prototype or method and use it for our purpose

// declare Array
let myHeros = ["thor","spiderman"]

// declare Object
let heroPower = {
    thor : "hammer",
    spiderman: "sling",

    getSpiderPower : function (){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
// Under Object -> Function, Array and Strings Comes
// define our own prototype in all the object . This is applicable all over the string, array and function.

Object.prototype.aditya = function(){
    console.log("Aditya is present in all the object");
}
// define our own prototype or property in all the Array .
Array.prototype.heyAditya = function(){
    console.log("Aditya say hello to all Array's");
}

myHeros.aditya()
heroPower.aditya()

myHeros.heyAditya()
// heroPower.heyAditya()  // This property is not working in Object

// Inheritance


const user = {
    username: "aditya",
    email : "kamaladitya52@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isavailable : false
}

const TASupport = {
    makeAssignment: true,
    fullTime : true,
    __proto__ : teachingSupport  // First way to define inheritance inside a function
}

teacher.__proto__ = user // Second way to define inheritance outside a function

// Modern Syntax or Third way that we genrally use now

Object.setPrototypeOf(teachingSupport,teacher)

let anotherUser = "chaiaurcode         "

// making our new method or prototype
String.prototype.trueLength = function(){
    console.log(`${this}`); // this refer to current element context
    console.log(`True length is ${this.trim().length}`);
}

anotherUser.trueLength()
"Aditya".trueLength()
"Hello     ".trueLength()

