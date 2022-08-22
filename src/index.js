document.addEventListener("DOMContentLoaded", () => {
  // your code here 
  const form = document.getElementById('create-task-form');
  const task = document.getElementById('tasks');

  form.addEventListener('submit', createTask);
  task.addEventListener('click', deleteTask)
  function createTask(e){
    e.preventDefault();

    const newTaskDescription = document.getElementById('new-task-description').value;
    console.log(newTaskDescription);

    const li = document.createElement('li');

    li.appendChild(document.createTextNode(newTaskDescription));
    const deleteBtn = document.createElement('button');

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    task.appendChild(li);

  }

  function deleteTask(e) {
    if (e.target.nodeName === 'BUTTON') {
      if(confirm('Are you sure?')) {
        let li = e.target.parentElement;
        task.removeChild(li);
      }
    }

  }
});
    
    
    

