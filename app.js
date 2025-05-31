function addTask() {
  const input = document.getElementById("new-task");
  const task = input.value;
  if (task.trim() !== "") {
    const ul = document.getElementById("todo-list");
    const li = document.createElement("li");
    li.innerText = task;
    ul.appendChild(li);
    input.value = "";
  }
}
