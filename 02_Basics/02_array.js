const marvelHeros = ["thor","Ironman","spiderman"]
const dcHeros = ["superman","flash","batman"]

//marvelHeros.push(dcHeros) // push return the same array
// console.log(marvelHeros); // Array merged but the second Array comes as 3 index element of first array
// console.log(marvelHeros[3][1]);

const allHeros = marvelHeros.concat(dcHeros) // concat returns a new array and both the array are merged properly.
//console.log(allHeros);

const allNewHeros =[...marvelHeros,...dcHeros] // spread operator. Also can add third array in similar way (... Third,)
console.log(allNewHeros); 

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity) //In place of argument we can use depth of array.
console.log(realAnotherArray); // Used to flat the array in depth. 

console.log(Array.isArray("Aditya")); // return false because Array is not their or to check array. 
console.log(Array.from("Aditya")); // returns Array with each letter
console.log(Array.from({firstname:"Aditya",lastname:"Kamal"})); // returns empty Array. Interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // return a new array from set of elements