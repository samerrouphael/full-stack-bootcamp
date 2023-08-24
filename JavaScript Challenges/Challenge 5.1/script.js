
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
para.style.color='green';
para.style="dotted";

let input = document.querySelector('input')

input.addEventListener('keydown',(a)=>{ 
    h1.style.backgroundColor='red'
    
    input.addEventListener('keydown',(s)=>{ 
        h1.style.padding='10px'    
    })
    input.addEventListener('keydown',(d)=>{ 
        let para2 = document.createElement('p');
        document.body.appendChild(para2);
    })
    input.addEventListener('keydown',(w)=>{ 
        h1.toggle='visible'
    })
    input.addEventListener('keydown',(space)=>{ 
        h1.style.fontsize='100px'
    })
})

