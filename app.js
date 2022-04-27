let header = document.querySelector('h1');
let dec = document.querySelector('.dec');
let body = document.querySelector('body');
let res = document.querySelector('.res');
let inc = document.querySelector('.inc')

function decrease(){
    header.textContent--
    body.style.backgroundColor= 'yellow'
}

dec.addEventListener('click', decrease)

function increase(){
    header.textContent++
    body.style.backgroundColor= 'green'
}

inc.addEventListener('click', increase)

function reset(){
    header.textContent = 0
    body.style.backgroundColor= 'red'  
}

res.addEventListener('click', reset)




