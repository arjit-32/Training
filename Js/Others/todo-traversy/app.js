// Defining UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");


//Loading Even Listeners
loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', getTasks);

    //Add Task Event
    form.addEventListener("submit", addTask);

    //Remove Task Event
    taskList.addEventListener('click', removeTask);

    //Clear Task Event
    clearBtn.addEventListener('click', clearTasks);

    //Filter Task Events
    filter.addEventListener('keyup', filterTasks);
}


function getTasks() {
    let tasks;
    let markedDeleted;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else { //Parse into JSON from string.
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    if (localStorage.getItem('markedDeleted') === null) {
        markedDeleted = [];
    } else { //Parse into JSON from string.
        markedDeleted = JSON.parse(localStorage.getItem('markedDeleted'));
    }

    tasks.forEach(function (task, index) {
        const li = document.createElement('li');
        li.className = 'collection-item'; //Materialize needs
        li.appendChild(document.createTextNode(task));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';

        li.appendChild(link);
        if (markedDeleted[index] === 1) {
            li.style.textDecoration = "line-through";
        }
        taskList.appendChild(li);
    });


}


function addTask(e) {
    if (taskInput.value === '') {
        alert("Add a Task");
    }
    const li = document.createElement('li');
    li.className = 'collection-item'; //Materialize needs
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);

    //Local Storage
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';
    e.preventDefault();
}

function storeTaskInLocalStorage(task) {
    let tasks;
    let markedDeleted;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else { //Parse into JSON from string.
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    if (localStorage.getItem('markedDeleted') === null) {
        markedDeleted = [];
    } else { //Parse into JSON from string.
        markedDeleted = JSON.parse(localStorage.getItem('markedDeleted'));
    }

    tasks.push(task);
    markedDeleted.push(0);
    //Convert from JSON to string as local storage only stores Strings 
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('markedDeleted', JSON.stringify(markedDeleted));
}


function removeTask(e) {
    //e.target tells where we clicked
    //We check if we clicked on <i> tags parent...<a> tag
    //If that <a> tag contains a class delete-item
    //Then remove parent of parent , <li> <--- <a> <--- <i>
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.style.textDecoration = 'line-through';
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
}

function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    let markedDeleted;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else { //Parse into JSON from string.
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    if (localStorage.getItem('markedDeleted') === null) {
        markedDeleted = [];
    } else { //Parse into JSON from string.
        markedDeleted = JSON.parse(localStorage.getItem('markedDeleted'));
    }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            markedDeleted[index] = 1;
        }
    });
    localStorage.setItem('markedDeleted', JSON.stringify(markedDeleted));
}

function clearTasks() {
    //taskList.innerHTML = '' 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage() {
    localStorage.clear();
}


function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) { //If text entered is present in list item then display it otherwise not
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}