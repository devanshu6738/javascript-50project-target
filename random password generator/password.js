let Uppercase='ABCDEFGHIJKLMNOPQRSTWXYZ';
let Lowercase='abcdefghijklmnopqrstwxyz';
let number='1234567890';
let special='!@#$&*';
let length=8;

// selecting  a atleast one character of each variable
const Randomone=[
    Uppercase.charAt(Math.floor(Math.random()*Uppercase.length)),
    Lowercase.charAt(Math.floor(Math.random()*Lowercase.length)),
    number.charAt(Math.floor(Math.random()*number.length)),
    special.charAt(Math.floor(Math.random()*special.length))
]

let password="";
for(let x of Randomone){
    password+=x;
}

// selecting a random character from allCharacter variable

let allCharacter=Uppercase+Lowercase+number+special;
for(let i=0;i<length-4;i++){
    password+=allCharacter.charAt(Math.floor(Math.random()*allCharacter.length))
}
console.log(password)

