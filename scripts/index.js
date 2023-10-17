let taskBtn = document.getElementById("taskBtn")
taskBtn.addEventListener("click", addTask)

let clearBtn = document.getElementById("clearTasks")
clearBtn.addEventListener("click", clearAllTasks)

taskInput.addEventListener("keyup", function (event){

    (event.key === "Enter") ? addTask() : null;

})

function addTask() {

    const taskText = taskInput.value.trim()

    if(taskText === ""){
        alert("Por favor, ingrese una tarea válida")
    }

    const li = document.createElement("li")

    const checkbox = document.createElement("input")

    checkbox.type = "checkbox"

    checkbox.className = "checkbox"

    const taskLabel = document.createElement("label")
    taskLabel.textContent = taskText

    checkbox.addEventListener("change", () => {
        taskLabel.classList.toggle("completed", checkbox.checked)
    })

    li.appendChild(checkbox, taskLabel)

    li.appendChild(checkbox)
    li.appendChild(taskLabel)

    taskList.appendChild(li)

    clearTaskInput()
    

}

function clearTaskInput(){
    taskInput.value = ""
    taskInput.focus()
}

function clearAllTasks() {
    // Obtén todas las tareas
    const tasks = document.querySelectorAll("li");

    // Recorre todas las tareas y elimínalas
    // for (let i = 0; i < tasks.length; i++) {
    //     taskList.removeChild(tasks[i]);
    // }

    // Con un forEach, sería:
    tasks.forEach(task => {
        taskList.removeChild(task);
    });
}