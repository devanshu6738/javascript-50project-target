let emoji=document.getElementById("emoji");
let des=document.getElementById("des");
let result;
async function fetchEmoji(){
    let emoji=await fetch("https://emoji-api.com/emojis?access_key=69b734ee09bf018979213619894d9464a3aaa298")
    result=await emoji.json();
    console.log(result)
}
fetchEmoji();

emoji.addEventListener("click",()=>{
    let randNum=Math.floor(Math.random() * result.length)
    let description=result[randNum].unicodeName.split('.')
    emoji.innerHTML=result[randNum].character
    des.innerText=description[1].substring(2)
})