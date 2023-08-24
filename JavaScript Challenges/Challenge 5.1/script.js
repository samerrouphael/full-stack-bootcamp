
let button = document.createElement("button");
document.body.appendChild(button);

button.textContent = 'button1'
button.style.padding = '10px 20px'
button.style.fontsize = '16px'
button.style.backgroundcolor = '#3498db'
button.style.color = '#ffffff'
button.style.border = 'none'
button.style.cursor = 'pointer'

button.addEventListener("click", function () {
    button.style.backgroundColor = "red"
    let randomNumber = Math.floor(Math.random() * 1000) + 1;
})

let para = document.createElement('h1');
document.body.appendChild(para);
para.textContent = "hello world";
para.style.border = '10px dotted green'



document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        para.style.backgroundColor = 'red'
    }
})

document.addEventListener('keydown', function (event) {
    if (event.key === 's' || event.key === 'S') {
        para.style.padding = '20px'
    }
})
document.addEventListener('keydown', function (event) {
    if (event.key === 'w' || event.key === 'W') {
        para.style.diplay = 'none'
    }
})
document.addEventListener('keydown', function (event) {
    if (event.key === 'd' || event.key === 'D') {
        let para2 = document.createElement('p');
        document.body.appendChild(para2);
        para2.textContent = "d is pressed";
    }
})

document.addEventListener('keydown', function (event) {
    if (event.key === 'Spacebar' || event.key === '') {
        para.style.fontSize = '250px'
    }
})

let form = document.createElement('form')
document.body.appendChild(form)
form.appendChild(document.createElement("br"));
let username = document.createElement('input')
form.appendChild(username)
form.appendChild(document.createElement("br"));
let email = document.createElement('input')
form.appendChild(email)
form.appendChild(document.createElement("br"));

let password = document.createElement('input')
form.appendChild(password)
form.appendChild(document.createElement("br"));
let confpass = document.createElement('input')
form.appendChild(confpass)
form.appendChild(document.createElement("br"));
button2.type = "button"
form.appendChild(button2);
button2.value = "Submit";

var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(! pattern.test(email.value)){
        email.setAttribute("placeholder", "Please enter a valid email address.")}


if(password.value !==confpass.value){ alert('error')}

if(password.value !==confpass.value && pattern==true) { alert('submitting')}
let button2 = document.createElement("input");


