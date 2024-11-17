const input1=document.getElementById("input1");
const btn1=document.getElementById("btn1");
const alltodo=document.getElementById("allTodo");

let data=JSON.parse(localStorage.getItem('todos')) || [];

function CreateTodo(todoObj){
    const { text, completed } = todoObj;
    const newDiv=document.createElement("div");
    newDiv.setAttribute("class","singletodo");
    newDiv.innerHTML=`
    <h2 class="todotext" id="todotext">${todoObj.text}</h2>
           <div class="input4">
            <input type="checkbox" name="" id="checkbox" >
            <button class="btn2">Remove Todo</button>
    `
    let checkbox=newDiv.querySelector("#checkbox");
    checkbox.checked = completed
    checkbox.addEventListener('click',()=>{
        todoObj.completed=checkbox.checked;
        localStorage.setItem('todos',JSON.stringify(data))
        const h2=newDiv.querySelector(".todotext")
        if(checkbox.checked){
            h2.classList.add("completed")
        }else{
            h2.classList.remove("completed")
        }
        localStorage.setItem('todos',JSON.stringify(data))
    })
    newDiv.querySelector(".btn2").addEventListener('click',()=>{
        newDiv.remove();
        data=data.filter(todo=>todo.text !== text);
        localStorage.setItem('todos',JSON.stringify(data))
    })
    alltodo.appendChild(newDiv)
    
}
data.forEach(todo => CreateTodo(todo));
btn1.addEventListener('click',(e)=>{
    e.preventDefault();
    if(input1.value===' '){
        alert("Enter the todo")
        return;
    }
    if(input1.value==''){
        alert("Enter the todo")
        return;
    }
    const newTodo = { text: input1.value, completed: false };

    CreateTodo(newTodo);
    data.push(newTodo)
    localStorage.setItem('todos',JSON.stringify(data))
    input1.value='';

})
