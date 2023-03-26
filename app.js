// selectors selecting all the html
const todoInput = document.querySelector(".todo-input");
console.log(todoInput);
const todoButton = document.querySelector(".todo-button");
console.log(todoButton);
const todoList = document.querySelector(".todo-list");
console.log(todoList);

document.addEventListener("DOMContentLoaded", getTodos);

// selection actual select element
const filterOption = document.querySelector(".filter-todo");
// event listeners for adding
todoButton.addEventListener("click", addTodo);
// for deleting
todoList.addEventListener("click", deleteCheck);
// adding event listener filter option
filterOption.addEventListener("click", filterTodo);

// function

function addTodo(event) {
  // prevent from the submitting
  event.preventDefault();
  // create div elements for the to do list
  // create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // add to do local storage
  saveLocaLTodo(todoInput.value);
  // check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fa-solid fa-check'></i>";
  completedButton.classList.add("complete-btn");
  todoDiv.classList.add("completedButton");
  todoDiv.appendChild(completedButton);
  //append the child
  // trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = " <i class='fa-solid fa-trash'></i>";
  trashButton.classList.add("trash-btn");
  todoDiv.classList.add("trashButton");
  //append to List
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);

  // clear to input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  console.log("item");
  //delete todo
  if (item.classList[0] === "trash-btn") {
    //making variable
    const todo = item.parentElement;
    // for delete animation giving class and animation
    todo.classList.add("fall");
    removeLocalTodos(todo);
    // function that remove the items after animation
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  // selecting with childnodes
  const todos = todoList.childNodes;
  console.log(todos);
  // after we can do foreach because its a nodelist in array
  todos.forEach(function (todo) {
    console.log(todo);
    //switch case
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocaLTodo(todo) {
  // check if i have already have in there
  let todos;
  if (localStorage.getItem("todos") === null) {
    // if we don't have then it will create a empty array
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  // check if i have already have in there
  let todos;
  if (localStorage.getItem("todos") === null) {
    // if we don't have then it will create a empty array
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    // create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fa-solid fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.classList.add("completedButton");
    todoDiv.appendChild(completedButton);
    //append the child
    // trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = " <i class='fa-solid fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.classList.add("trashButton");
    //append to List
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    // if we don't have then it will create a empty array
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  console.log(todoIndex);
  // index of to fins out the number
  todos.splice(todos.indexOf(todoIndex, 1));
  localStorage.setItem("todos", JSON.stringify(todos));
}
