function addTask() {
  const input = document.getElementById("input-task");
  const inputTask = input.value.trim();

  if (inputTask === "") {
    alert("Please Enter your Task First...");
    return;
  }

  const li = document.createElement("li");
  li.textContent = inputTask;

  //Mark as done on click
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  //Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = ""; //Clear input
}
