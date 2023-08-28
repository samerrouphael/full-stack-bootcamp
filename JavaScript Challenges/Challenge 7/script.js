let containerdiv = document.createElement("div");
containerdiv.className = "container";
document.body.append(containerdiv)
let login = document.createElement("div")
containerdiv.appendChild(login)
login.className = "login_container";


let signin = document.createElement("div")
containerdiv.appendChild(signin)
signin.className = "login_signin";


let signnow = document.createElement("div")
containerdiv.appendChild(signnow)



let paragraph = document.createElement('h1');
paragraph.textContent = "Sign up now";
signnow.appendChild(paragraph);


let paragraph2 = document.createElement('h3');
paragraph2.textContent = "Enter your details";
signnow.appendChild(paragraph2);


let form = document.createElement('form')
signnow.appendChild(form)

let email = document.createElement('input')
form.appendChild(email)
email.className = " inputfield"
email.type = 'email'
email.placeholder = 'Email'
form.appendChild(document.createElement("br"));
let password = document.createElement('input')
form.appendChild(password)
password.className = 'inputfield'
password.type = 'password'
password.placeholder = 'Password'
form.appendChild(document.createElement("br"));
let confpass = document.createElement('input')
form.appendChild(confpass)
confpass.className = 'inputfield'
confpass.type = 'Password'
confpass.placeholder = 'Confirm Password'
form.appendChild(document.createElement("br"));
let button = document.createElement("button");
form.appendChild(button);
button.textContent = 'Submit'
button.className = 'filled-btn'
button.id = 'submit-btn'

form.appendChild(document.createElement("br"));

button.addEventListener("click", function () {
    if (password.value !== confpass.value) {
        passwordError.textContent = "Passwords do not match!";
    }
    if (password.value === confpass.value) { 
        window.location.href = 'quote.js'
     }
})
