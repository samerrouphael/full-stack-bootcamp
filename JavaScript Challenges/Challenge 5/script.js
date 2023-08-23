
let b = document.querySelector(".menu");
let c = document.querySelector(".header");
let d = document.querySelector(".footer");

const child1 = menu.children
console.log("child1")
const child2 = header.children;
console.log('child2')
const child3 = footer.children;
console.log('child3')


document.body.appendChild(newDiv);
newDiv.appendChild(newpara);

let containerdiv = document.createElement("div");
containerdiv.className = "container";

let paragraph = document.createElement('p');
paragraph.innerHTML = "hello world";


document.querySelector('.container')

paragraph.style.backgroundcolor = 'red';
paragraph.style.fontsize = '24 px';
paragraph.style.fontfamily = "Helvetica";
paragraph.style.border = " 1px ,solid, black"
let heading = document.querySelectorAll("h1,h3");
heading.forEach(heading => { heading.style, fontstyle = "italic"; });

let x= document.querySelector("body")
var button = document.createElement("button");
button.textContent = "Hover Me";
button.className = "color-change-button";
x.appendChild(button);
let button2=document.createElement("button");
button2.textContent="Hover me";
button2.className="color-change-button";
buttonContainer.appendChild(button);

button2.style.padding="10px 20px";
button2.style.backgroundColor="red"
button2.style.cursor="pointer"


Eventlistener for mouseover (hover)
button2.addEventListener("mouseover", function() {
    button2.style.backgroundColor = "orange"; // Change background color on hover
});

// Event listener for mouseout (move away)
button2.addEventListener("mouseout", function() {
    button2.style.backgroundColor = "blue"; // Revert back to original background color
});



