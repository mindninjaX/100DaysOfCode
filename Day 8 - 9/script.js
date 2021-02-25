function addTask() {
    let task = document.getElementsByTagName("input")[0].value;
    let newTask = document.createElement("div");

    newTask.className = "task";

    newTask.appendChild(document.createElement("input")).setAttribute("type", "checkbox");

    newTask.appendChild(document.createElement("p")).innerHTML = task;
    
    let tasklist = document.getElementsByClassName("tasklist")[0]
    tasklist.appendChild(newTask);

    let border = document.querySelector("div")
    border.setAttribute("id", "tasklist-border")
}