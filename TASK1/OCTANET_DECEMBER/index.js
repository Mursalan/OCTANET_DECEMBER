function addTask() {
    var taskInput = document.getElementById("taskInput");
    var todoTasks = document.getElementById("todoTasks");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;
    li.onclick = function () {
        moveTask(this, todoTasks, "doneTasks");
    };

    todoTasks.appendChild(li);
    taskInput.value = "";
}

function moveTask(task, fromList, toListId) {
    var toList = document.getElementById(toListId);
    if (toListId === "doneTasks") {
        task.onclick = function () {
            removeTask(this, toList);
        };
    } else {
        task.onclick = function () {
            moveTask(this, fromList, "doneTasks");
        };
    }
    fromList.removeChild(task);
    toList.appendChild(task);
}

function removeTask(task, list) {
    list.removeChild(task);
}