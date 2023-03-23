// selectors selecting all the html
const todoInput = document.querySelector(".todo-input");
console.log(todoInput);
const todoButton = document.querySelector(".todo-button");
console.log(todoButton);
const todoList = document.querySelector(".todo-list");
console.log(todoList);

// event listeners
todoButton.addEventListener("click", addTodo);

// function

function addTodo(event) {
  // prevent from the submitting
  event.preventDefault();
  // create div elements for the to do list
  // create   toto div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create li
  const newTodo = document.createElement("li");
  newTodo.innerText = "key";
  newTodo.classList.add("todo-item");
  //append the child
  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fa-solid fa-check'></i>";
  completedButton.classList.add("complete-btn");
  todoDiv.classList.add("completedButton");
  todoDiv.appendChild(completedButton);
  //append the child
  const trashButton = document.createElement("button");
  trashButton.innerHTML = " <i class='fa-solid fa-trash'></i>";
  trashButton.classList.add("complete-btn");
  todoDiv.classList.add("trashButton");
  //append to List
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
}
