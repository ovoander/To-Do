const inputText = document.getElementById('todo-input')
const inputButton = document.getElementById('add-todo')
const todoList = document.getElementById('todo-list')

const TODO_ELEMENT_STYLE = "rounded bg-zinc-700 p-2"

const todos = JSON.parse(window.localStorage.getItem('tasks')) || []

const createTodoElement = (text) => {
  const todoElement = document.createElement('li')

  todoElement.classList.add(...TODO_ELEMENT_STYLE.split(" "))
  todoElement.innerText = text

  return todoElement
}

todos.forEach((text) => {
  const todoElement = createTodoElement(text);

  todoList.appendChild(todoElement)
})

const onClick = () => {
  const todoElement = createTodoElement(inputText.value);

  todoList.appendChild(todoElement)

  todos.push(inputText.value)

  window.localStorage.setItem('tasks', JSON.stringify(todos))
};

inputButton.onclick = onClick;

