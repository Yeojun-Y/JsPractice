const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
let toDoListArray = [];

const TODO_KEY = "todo";
function saveToDo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDoListArray));
}
function showToDO(newToDo) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const span = document.createElement("span");
  btn.innerHTML = "X";
  btn.addEventListener("click", delToDo);
  li.appendChild(btn);
  li.id = newToDo.id;
  span.innerText = newToDo.text;
  li.appendChild(span);
  toDoList.appendChild(li);
}
function delToDo(event) {
  const delLi = event.target.parentElement;
  delLi.remove();
  toDoListArray = toDoListArray.filter((toDo) => toDo.id !== delLi.id);
  saveToDo();
  //   localStorage.removeItem();
}

function handleToDoSubmit(event) {
  const date = new Date();
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObject = {
    text: newToDo,
    id: date.getTime() + Math.random().toFixed(4),
  };
  toDoListArray.push(newToDoObject);
  showToDO(newToDoObject);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDo = localStorage.getItem(TODO_KEY);
if (savedToDo) {
  const parsedToDo = JSON.parse(savedToDo);
  toDoListArray = parsedToDo;
  parsedToDo.forEach(showToDO);
}
