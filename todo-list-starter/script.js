let todoTasks = ["Walk Chilli", "Make Dinner"];
let todoTasksStatus = [false, true];

const addTask = () => {
    const newTask = document.getElementById("new-task-text");
    if (newTask.value.trim()) {
        todoTasks.push(newTask.value.trim());
        todoTasksStatus.push(false);
        newTask.value = "";
        updateTodoList();
    }
};

const updateTodoList = () => {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    for (const [index, task] of todoTasks.entries()) {
        const newTodoTaskElement = createNewTodoItemElement(task, index);
        todoList.appendChild(newTodoTaskElement);
    }
};

const createNewTodoItemElement = (task, index) => {
    // Create a <p> element to store the task description
    const newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;

    //Apply a CSS class to the completed items
    if (todoTasksStatus[index] == true) {
    newTodoTaskTextElement.classList.add("complete");
    }

    // Create a <li> element to contain the paragraph
    const newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);

    // Adding a button to mark each item as complete
    const completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = todoTasksStatus[index] ? "Mark Incomplete" : "Mark Complete";
    completeButtonElement.onclick = function () {
        toggleComplete(index);
};
    newTodoTaskElement.appendChild(completeButtonElement);

    return newTodoTaskElement;
};

const todoList = document.getElementById("todo-list");
// for (const task of todoTasks) {
for (const [index, task] of todoTasks.entries()) {
    const newTodoTaskElement = createNewTodoItemElement(task, index);
    //Add the <li> element to the list
    todoList.appendChild(newTodoTaskElement);
}

const toggleComplete = (index) => {
    // If it is complete, set it to incomplete.
    // If it is incomplete, set it to complete.
    todoTasksStatus[index] = !todoTasksStatus[index];
    updateTodoList();
};

updateTodoList();
    // // Create a <p> element to store the task description
    // const newTodoTaskTextElement = document.createElement("p");
    // newTodoTaskTextElement.innerText = task;

    // // Apply a CSS class to the completed items
    // if (todoTasksStatus[index] == true) {
    //     newTodoTaskTextElement.classList.add("complete");
    // }

    // // Create a <li> element to contain the paragraph
    // const newToDoTaskElement = document.createElement("li");
    // newToDoTaskElement.appendChild(newTodoTaskTextElement);

    // // Adding a button to mark each item as complete
    // const completeButtonElement = document.createElement("input");
    // completeButtonElement.type = "button";
    // completeButtonElement.value = "Completed";
    // completeButtonElement.onclick = function () {
    //     toggleComplete(index);
    // };
    // newToDoTaskElement.appendChild(completeButtonElement);