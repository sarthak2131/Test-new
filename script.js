document.addEventListener('DOMContentLoaded',()=>{
    const todoInput = document.getElementById("task-input");

const addTaskButton=  document.getElementById("add-btn");

const todoList = document.getElementById("task-list");


let tasks = JSON.parse(localStorage.getItem('tasks')) ||[];

tasks.forEach(task => renderTasks(task));
        addTaskButton.addEventListener('click',()=>{
            taskText = todoInput.value.trim();
            if(taskText === '') return ;
            const newTask = {
                id:Date.now(),
                text : taskText,
                completed:false,
            }
            tasks.push(newTask);
            saveTasks();
            console.log(tasks)
            taskText.value= '';
        })
        function saveTasks(){
            localStorage.setItem('tasks' , JSON.stringify(tasks));
        }

        function renderTasks(tasks){
            console.log(tasks)
        }
})





