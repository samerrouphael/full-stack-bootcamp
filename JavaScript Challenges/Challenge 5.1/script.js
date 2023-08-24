
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
    button.textContent = '10'
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
        para.style.padding = 'red'
    }
})
document.addEventListener('keydown', function (event) {
    if (event.key === 'w' || event.key === 'W') {
        para.toggleAttribute = 'visible'
    }
})
ocument.addEventListener('keydown', function (event) {
    if (event.key === 'd' || event.key === 'D') {
        let para2 = document.createElement('p');
        document.body.appendChild(para2);
        para.textContent = "samer";
    }
})

document.addEventListener('keydown', function (event) {
    if (event.key === 'space') {
        para.style.fontsize = '50px'
    }
})




