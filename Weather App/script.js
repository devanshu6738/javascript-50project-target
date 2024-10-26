const city=document.getElementById("cityname");
const time=document.getElementById("time");
const temp=document.getElementById("temp");
const button=document.getElementById("btn");
const userinput=document.getElementById("fill");

async function getWeather(city){
    const promise=await fetch(`https://api.weatherapi.com/v1/current.json?key=6459ff749ea842ed841100938242610&q=${city}&aqi=yes`)
    return promise.json();
}
button.addEventListener('click',async()=>{
    const value=userinput.value;
    const result=await getWeather(value);
    city.innerText=`${result.location.name}`;
    time.innerText=`${result.location.localtime}`;
    temp.innerText=`${result.current.temp_c}`;
})
