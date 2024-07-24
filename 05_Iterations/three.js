// for-of loop

// for (const iterator of object) {
    
// }

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps -> Map have key and value pair. Map is unique.
// Maps are iterable in for-of loop
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for (const [key,value] of map) { // de-structure [key,value]
    console.log(key,':',value);
}

const myObject = { 
    game1 : "NFS",
    game2 : "spiderman" 
}

// for (const [key,value] of myObject) { // Object are not Iterable in for of
//     console.log(key,':',value);
// }