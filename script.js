const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", function() {
  const task = input.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function() {
    li.remove();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
});
