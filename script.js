/**
 *
 * @param {boolean} add
 */
function newTask(add = false) {
  /**
   * @type {HTMLInputElement}
   */
  const taskName = document.getElementById("task-name").value

  if (!taskName) return;

  renderTask(taskName);

  if (!add) return;

  const currentItems = JSON.parse(window.localStorage.getItem("tasks")) || []

  currentItems.push(taskName);
  window.localStorage.setItem("tasks", JSON.stringify(currentItems));
}


const exampleTaskElement = document.getElementById("example-entry");
const entries = document.getElementById("entries");

/**
 * 
 * @param {string} name 
 */
function renderTask(name) {
  /**
   * @type {HTMLDivElement}
   */
  const newEntry = exampleTaskElement.cloneNode(true);

  newEntry.removeAttribute("id");
  newEntry.removeAttribute("hidden");

  const text = newEntry.getElementsByTagName("ul")[0];
  text.innerText = name

  entries.appendChild(newEntry);
}
