const button = document.querySelectorAll('span')
console.log(button);
const body = document.querySelector('body')

button.forEach(function (button){
    console.log(button); 
    button.addEventListener('click', function(ele){
        console.log(ele);
        console.log(ele.target);
        if(ele.target.id === 'grey')
            body.style.backgroundColor = ele.target.id
        if(ele.target.id === 'white')
            body.style.backgroundColor = ele.target.id
        if(ele.target.id === 'blue')
            body.style.backgroundColor = ele.target.id
        if(ele.target.id === 'yellow')
            body.style.backgroundColor = ele.target.id
        if(ele.target.id === 'red')
            body.style.backgroundColor = ele.target.id
        if(ele.target.id === 'green')
            body.style.backgroundColor = ele.target.id
        if(ele.target.id === 'orange')
            body.style.backgroundColor = ele.target.id
        if(ele.target.id === 'purple')
            body.style.backgroundColor = ele.target.id
    });
});