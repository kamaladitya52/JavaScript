// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


// Avoid these below types of comparision
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); 
console.log(null == 0);
console.log(null >= 0);

// The reason is that equality check ( == ) & comparision ( > < >= <= ) work differently.
// Comparisions convert null to a number, trating it as 0.
// That's why null >= 0 is true and null > 0 is false.   

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

// === -> strict check => check value and dataType both
console.log("2" === 2);