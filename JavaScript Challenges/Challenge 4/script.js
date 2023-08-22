let fivenumber =[1,2,3,4,5] 
console.log(fivenumber)

const generalinfo ={ Name :'Samer', age :'36',height:'180',location:'newrawda',nationality :'lebanese'}
console.log(generalinfo)

let threenumber =[1,2,3]
console.log(threenumber)

const allnumber =[...threenumber,...fivenumber]
console.log(allnumber)

const additionalinfo ={hobby:'foot',education:'telecom Eng'}
const allinfo={...generalinfo,...additionalinfo};
console.log(allinfo)




