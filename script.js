const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load saved tasks
window.onload = function () {
    showTasks();
};

// Add Task
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let tasks = getTasks();

    tasks.push({
        text: task,
        completed: false
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    showTasks();
}

// Display Tasks
function showTasks() {

    taskList.innerHTML = "";

    let tasks = getTasks();

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span>${task.text}</span>

            <div class="icons">

                <i class="fas fa-check" onclick="completeTask(${index})"></i>

                <i class="fas fa-pen" onclick="editTask(${index})"></i>

                <i class="fas fa-trash" onclick="deleteTask(${index})"></i>

            </div>
        `;

        taskList.appendChild(li);

    });

}

// Complete Task
function completeTask(index) {

    let tasks = getTasks();

    tasks[index].completed = !tasks[index].completed;

    localStorage.setItem("tasks", JSON.stringify(tasks));

    showTasks();

}

// Edit Task
function editTask(index) {

    let tasks = getTasks();

    let newTask = prompt("Edit Task", tasks[index].text);

    if (newTask !== null && newTask.trim() !== "") {

        tasks[index].text = newTask.trim();

        localStorage.setItem("tasks", JSON.stringify(tasks));

        showTasks();

    }

}

// Delete Task
function deleteTask(index) {

    let tasks = getTasks();

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    showTasks();

}

// Get Tasks
function getTasks() {

    return JSON.parse(localStorage.getItem("tasks")) || [];

}