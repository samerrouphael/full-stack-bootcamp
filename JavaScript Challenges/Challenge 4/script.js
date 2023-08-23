let fivenumber =[1,2,3,4,5] 
console.log(fivenumber)

const generalinfo ={ Name :'Samer', age :'36',height:'180',adress:'newrawda',nationality :'lebanese'}
console.log(generalinfo)

let threenumber =[1,2,3]
console.log(threenumber)

const allnumber =[...threenumber,...fivenumber]
console.log(allnumber)

const additionalinfo ={hobby:'foot',education:'telecom Eng'}
const allinfo={...generalinfo,...additionalinfo};
console.log(allinfo)

let [first,second,third] = fivenumber;
console.log(first);
console.log(second)
console.log(third)

let {Name,adress,nationality} = generalinfo;
console.log(Name);
console.log(adress)
console.log(nationality);


let personalinfo ={ 
    name2 : 'Ssmer',    age:'36', height:'180', adress:'newrawda',
     contactinfo :{ phome:'70307183', email:'rouphaels@gmail.com'

    }

}
console.log(personalinfo.contactinfo.email)
let resofnumber =[];
console.log()


