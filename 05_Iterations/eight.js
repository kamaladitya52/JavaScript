// **************** Reduce *********************

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10



const myNums = [1,2,3]

// reduce also uses call back function

const myTotal = myNums.reduce( function (acc,currval) {
    console.log(`acc : ${acc} and currVal : ${currval}`);
    return acc + currval
}, 0 ) // 0 shows acc. initial value

console.log(myTotal);

const total = myNums.reduce( (acc,curr) => acc + curr ,0)  // arrow function
console.log(total);

const shoppingCart = [
    {
        itemName : "JS Course",
        price : 2999
    },
    {
        itemName : "DSA Course",
        price : 3999
    },
    {
        itemName : "Web Dev Course",
        price : 5999
    },
    {
        itemName : "AI / ML Course",
        price : 4999
    }
] 

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log(priceToPay);