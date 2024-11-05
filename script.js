document.getElementById("add").addEventListener("click",addTodo);
document.getElementById("todo-input").addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        addTodo();
    }
})

function addTodo(){
    const todoTask = document.getElementById("todo-input");
    const task = todoTask.value;
    
    if(task!==""){
        const todoList = document.getElementById("todo-list");

        const todoItem = document.createElement("li");
        todoItem.className = "todo-item";

        const taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.innerText = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.innerText = "X";
        deleteBtn.onclick = function(){
            todoList.removeChild(todoItem);
        }

        todoItem.appendChild(taskText);
        todoItem.appendChild(deleteBtn);

        todoList.appendChild(todoItem);
        todoTask.value = "";
    }
}