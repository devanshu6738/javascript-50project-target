let digit='1234567890';
// in ans put a total number of digit u want am otp
let ans=4;
let otp='';  
let len=digit.length;
for(let i=0;i<ans;i++){
    otp+=Math.floor(Math.random()*len);
}
console.log(otp);
