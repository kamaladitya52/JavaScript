const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// Map also uses call back function and return array

const newNums = myNumbers.map( (num) => num + 10)
// const newNums = myNumbers.map( (num) =>{num+10}) // gives  undefined because uses scope without return 
console.log(newNums);

//chaining -> can use map and filter multiple times using chaining
const newNumber = myNumbers
                    .map( (num) => num*10)
                    .map(  (num) => num + 1 )
                    .filter( (num) => num >= 40 )
console.log(newNumber);