const username=document.getElementById("username");
const button=document.getElementById('btn');
const image=document.getElementById('img')
 function getQr(qr){
    image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr}`;
    
}

button.addEventListener('click',()=>{
    const value=username.value;
    getQr(value);
   
})