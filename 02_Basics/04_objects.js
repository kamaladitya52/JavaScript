// const tinderUser = new Object() // Singleton object
const tinderUser = {} // Non - Singleton Object
// Both the above way are correct and return empty object. The only difference is singleton object and non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    fullname: {
        username : {
            firstname: "Aditya",
            lastname: "Kamal"
        }
    }
}

console.log(regularUser.fullname.username);

const obj1 = {1:"A",2:"B"}
const obj2 = {3:"C",4:"D"}
const obj3 = {5:"E",6:"F"}

// Object.assign(target,source) 
const obj4 = Object.assign({},obj1,obj2,obj3) // {} is target, empty object
console.log(obj4);

const obj5 = {...obj1,...obj2,...obj3} // Using spread operator
console.log(obj5);

const users = [ // Use this when data comes from database. Under Array , multiples object defined 
    {
        id : 1,
        email : "some1@gmail.com"
    },
    {
        id : 2,
        email : "some2@gmail.com"
    },
    {
        id : 3,
        email : "some3@gmail.com"
    }
]

console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // returns array of keys
console.log(Object.values(tinderUser)); // returns array of values
console.log(Object.entries(tinderUser)); // return array of key and value inside a array
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // To check whether the property is available or not and return in boolean. 


// ***************************** De-structure **************************************
const course = {
    courseName : "JavaScript",
    price : "4999",
    courseInstructor : "Someone"
}

const {courseInstructor} = course // de-structure the object
const {courseInstructor: instructor} = course // de-structure the object or to shorten the name

console.log(courseInstructor);
console.log(instructor);

// JSON format

// {
//     "name" : "Aditya Kamal",
//     "course" : "JavaScript",
//     "price" : "2999"
// }

