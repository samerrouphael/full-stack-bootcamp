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
