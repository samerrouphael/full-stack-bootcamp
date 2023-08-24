
let button = document.createElement("button");
document.body.appendChild(button);

button.textContent='button1'
button.style.padding ='10px 20px'
button.style.fontsize='16px'
button.style.backgroundcolor='#3498db'
button.style.color='#ffffff'
button.style.border ='none'
button.style.cursor='pointer'

button.addEventListener("click",function(){
    button.style.backgroundColor = "red"
    button.textContent='10'
})

let para = document.createElement('h1');
document.body.appendChild(para);
para.textContent = "hello world";
para.style.width="10px";
para.style.color='red';
para.style="dotted";

para.addEventListener("keydown", (event) => {});

onkeydown = (event) => {};
