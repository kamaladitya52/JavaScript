console.log(Math.PI);
Math.PI = 5; // Not able to overwrite the value because the value is constant
console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math,"PI") // (Module Name , property(PI here)) -> use to check what property is already defined here.
console.log(descripter);

const mynewObjet = Object.create(null) // by-default value is null inside or we can put Object also 

const course = {
    name : "JS",
    price : 2999,
    isAvailable : true,

    faculty : function(){
        console.log("Do not print function.");
        
    }
}

console.log(course);
console.log(Object.getOwnPropertyDescriptor(course,"name"));

// JS allows to change the properties but not for all other's otherwise mess will happen
// Object.defineProperty(Object name,property name, {which one we have to change}) is use to change the properties and takes three parameters here

Object.defineProperty(course,"name",{
    writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(course,"name"));

for (let [key,value] of Object.entries(course)) {
    if(typeof value !== 'function') // use this condition to remove the function direct print
        console.log(`${key} : ${value}`); // name property is not print beacuse enumerable: false is set
}

