todos = [];

const createTodoBtn = document.querySelector(".create");
const todoTaskInput = document.querySelector("#todo-name-input");
const todoDateInput = document.querySelector("#todo-date-input");
const displayTodo = document.querySelector(".display-todo-container");

function displaytodo() {
    displayTodo.innerHTML = "";
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    for (let i = 0; i < todos.length; i++){
        displayTodo.innerHTML += `
            <div class="display-each-todo-container">
                <span class="todo-name">${todos[i]["task"]}</span>
                <span class="todo-date">${todos[i]["date"]}</span>
                <button onclick="deleteTodo(${i})">Delete Todo</button>
            </div>
        `;
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    displaytodo()
}

let addtask = () => {
    todos.push({ task: todoTaskInput.value, date: todoDateInput.value });
    todoTaskInput.value = "";
    todoDateInput.value = "";
    localStorage.setItem("todos", JSON.stringify(todos));
    displaytodo()
    return
}

createTodoBtn.addEventListener("click", addtask);
displaytodo()
