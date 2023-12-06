const input = document.getElementById("add-todo");
const list = document.getElementById("list");

function addTodo() {
  const todoItem = document.createElement("li");
  todoItem.textContent = input.value;

  list.appendChild(todoItem);

  input.value = "";
}

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTodo();
});
