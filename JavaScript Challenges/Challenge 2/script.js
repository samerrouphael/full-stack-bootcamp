let x = 36;
if (x > 20) {
    console.log('you can enter the room')
}
else { console.log('you cant enter the room') }

const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;
console.log(expression1)
console.log(expression2)
console.log(expression3)
console.log(expression4)

const age = 25;
const hasDriverLicense = true;
const hasCar = false;
const canDrive = false;
const canRentCar = false;
const needdriver = false
if (age > 18 && hasDriverLicense == true) {
    canDrive == true;
    console.log('candrive')
}
else { console.log('false') }




if (age > 22 && hasDriverLicense == true && hasCar == false) {
    canRentCar == true;
    console.log('canRentCar')
}
else {
    console.log('False')

}

if (age < 18 && hasDriverLicense == false && hasCar == false) {
    needdriver == true;
}
else { needdriver == false; }


var role = admin;
if (role = admin){ console.log('You have read and write access for the data')}
else if(role='user'){ console.log('You have only read access for the data');}
 else if(role='guest'){ console.log('You have no access for the data')}
else { console.log('User role is not recoginized')}