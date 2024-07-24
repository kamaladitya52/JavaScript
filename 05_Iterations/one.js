// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}

// console.log(element); // not accesiable outside the blovk scope of for

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and Inner loop value is ${i}`);
        // console.log(i,'*',j,'=',i*j);
        console.log(i + ' * ' + j + ' = ' + i*j);
    }
}

let myArray = ["flash", "superman", "batman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// break and continue

for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        break // exit from the loop
    }
    console.log(`Value of i is ${index}`);

}
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        continue // is similar to skip the value
    }
    console.log(`Value of i is ${index}`);
}