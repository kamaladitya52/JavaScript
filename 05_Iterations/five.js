const coding = ["js","ruby","java","python","cpp"]

//call back function i.e.. function without function name
coding.forEach( function (val){
    console.log(val);
})

coding.forEach( (item)=>{
    console.log(item);
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe) // only give function reference and do not execute that function i.e.. only write printMe not printMe()

coding.forEach( (item,index,arr)=>{ // also have index and array parameter 
    console.log(item,index,arr);
})

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageName); // Finding array object values. Mostly use in Database.
})