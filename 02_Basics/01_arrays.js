// array

const myArr = [0,1,2,3,4,5]
console.log(myArr[1]);
console.log(myArr);

const myHeros = ["shaktiman","superman","batman","spiderman"]
const myArr2 = new Array(1,2,3,4,5)

// ********************************   Array methods *******************************

// myArr.push(6)
// console.log(myArr);
// myArr.pop()

myArr.unshift(9) // Add 9 at starting of array by shifting other elements by one place
console.log(myArr);

myArr.shift() // Remove the element present at starting of the array i.e.. at 0-index 
console.log(myArr);

console.log(myArr.includes(9)); // output is in boolean form
console.log(myArr.indexOf(9)); // return -1 if element is not present
console.log(myArr.indexOf(4));


const newArr = myArr.join()
console.log(typeof newArr);

console.log("A -> ", myArr); // Original Array
const myn1 = myArr.slice(1,3) // last range not included
console.log(myn1); 
console.log("B -> ", myArr); // After Slicing to changes and 

const myn2 = myArr.splice(1,3)  // last index included
console.log(myn2); 
console.log("C -> ", myArr); // After splicing array changes.

