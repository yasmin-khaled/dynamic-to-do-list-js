document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText.length <= 0) {
      alert("Enter a task");
    } else {
      const element = document.createElement('li');
      element.textContent = taskText;
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.class = "remove-btn";
      removeButton.addEventListener('click', function () {
        taskList.removeChild(element);
      });
      element.appendChild(removeButton);
      taskList.appendChild(element);
      taskInput.value = '';
    }
  }

  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', function(event){
    if(event.key == 'Enter'){
        addTask();
    }
  });

  document.addEventListener('DOMContentLoaded', addTask);
});
