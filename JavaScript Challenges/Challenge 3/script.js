function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(1, 2));
function findmax(a, b) {
    if (a > b)
        return (a);
    else if (a < b)
        return (b);
    else return 'both are equal';
}
console.log(findmax(1, 2));

function compute(c, d, operation) {

switch (operation) { 
    case 'add' : return  c+d;
    break ;
    case 'substract' : return  c-d;
    break ;
    case '/' : return  c/d;
    break ;
    case '*' : return  c*d;
    break ;
}
   
}

console.log(compute(5, 2, 'add'));
console.log(compute(5, 2, '*'));
globalVar = 5;
const squareNumber = (number) => number * number;
console.log(squareNumber(globalVar))


let i ;
for (i=1;i<11;i++){ 
    console.log(i)
}
j=11;
while(j>1){ 
    j--;
    console.log(j)}

let k=0;
do { 
    if (k%2 ==0){
    console.log(k)}
    k++;

}while (k<11)