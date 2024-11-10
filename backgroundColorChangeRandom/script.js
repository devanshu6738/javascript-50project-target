let body=document.getElementsByTagName("body");
function Changecolor(){
    let colorString='1234567890abcdef';
let color='';
for(let i=0;i<6;i++){
    let random=Math.floor(Math.random()*colorString.length);
    color+=colorString[random];
}
body[0].style.backgroundColor=`#${color}`
}
setInterval(Changecolor,1000)