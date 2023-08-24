const myTimeout = setTimeout(timeout, 5000);
function timeout( ){
let para = document.createElement('h1');
document.body.appendChild(para);
para.textContent = "hello after 5 sec";}

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();

  function delayedPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise resolved!");
      }, 2000); 
    });
  }
  
  // Using the delayed promise
  delayedPromise()
    .then(message => {
      console.log(message); // Output: Promise resolved!
    })
    
    const delayedPromise2 = new Promise((resolve) => {
        setTimeout(() => {
          resolve("Promise resolved!");
        }, 2000);
      });
      
      // Chaining Promises
      delayedPromise2
        .then((message) => {
          alert(message); // Alerts "Promise resolved!"
          console.log("Chained message!"); // Logs "Chained message!" to the console
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
  
  
  
  
  
  