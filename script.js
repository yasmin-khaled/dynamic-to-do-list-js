document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
  }

  function addTask(taskText, save = true) {
    if (taskText.length <= 0) {
      alert("Enter a task");
    } else {
      const element = document.createElement("li");
      element.textContent = taskText;
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");
      removeButton.addEventListener("click", function () {
        taskList.removeChild(element);
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        const updatedTasks = storedTasks.filter((task) => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      });
      element.appendChild(removeButton);
      taskList.appendChild(element);
      taskInput.value = "";
    }
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  }

  addButton.addEventListener("click", ()=> {
    addTask(taskInput.value.trim(), true);
  });

  taskInput.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      addTask(taskInput.value.trim());
    }
  });

    loadTasks();
});
