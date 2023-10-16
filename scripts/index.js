let taskBtn = document.getElementById("taskBtn")
taskBtn.addEventListener("click", addTask)

let clearBtn = document.getElementById("clearTasks")
clearBtn.addEventListener("click", clearAllTasks)

taskInput.addEventListener("keyup", function (event){

    (event.key === "Enter") ? addTask() : null;

})

function addTask() {

    const taskText = taskInput.value.trim()

    const li = document.createElement("li")

    const checkbox = document.createElement("input")

    checkbox.type = "checkbox"

    checkbox.className = "checkbox"

    const taskLabel = document.createElement("label")
    taskLabel.textContent = taskTest


}

function clearAllTasks() {

}