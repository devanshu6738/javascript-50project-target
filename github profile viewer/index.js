const input=document.getElementById("input1")
const btn=document.getElementById("btn1")
const image=document.getElementById("img1")
const following=document.getElementById("following")
const follower=document.getElementById("followers")
const repo=document.getElementById("repo")
const username1=document.getElementById("username1")
const bio=document.getElementById("bio")
const link=document.getElementById("link")
const userprofile=document.getElementById("userprofile")
async function Fetchuser(username){
    let response=await fetch(`https://api.github.com/users/${username}`)
    let result=await response.json();
    return result;
}

btn.addEventListener('click',async()=>{
    let user=input.value;
    try {
        let x=await Fetchuser(user);
        image.src=x.avatar_url;
        following.innerText=x.following;
        follower.innerText=x.followers;
        repo.innerText=x.public_repos;
        username1.innerText=x.login;
        bio.innerText=x.bio;
        link.href=`https://github.com/${x.login}`
        userprofile.style.display="flex";
    } catch (error) {
    }
})