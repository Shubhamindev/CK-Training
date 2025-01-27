let todos = [];
let completedTodos = [];

function addTodo() {
    let todo = document.getElementById('todoInput').value;
    if (todo === '') {
        alert('Please enter a todo');
        return;
    }
    localTodos.push(todo);
    localStorage.setItem('todos', JSON.stringify(localTodos));
    let localTodos = JSON.parse(localStorage.getItem('todos')) || [];
    document.getElementById('todoInput').value = '';
    displayTodos();
}

function createButton(text, onClick, styles = {}) {
    let button = document.createElement('button');
    button.textContent = text;
    button.onclick = onClick;
    Object.assign(button.style, styles);
    return button;
}


function toggleDropdown() {
    var dropdownContent = document.getElementById('filterDropdown');
    dropdownContent.style.display = (dropdownContent.style.display === "none" || dropdownContent.style.display === "") ? "block" : "none";
}

function filterAll() {
    displayTodos();
}

function displayTodos() {
    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    var todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach(function(todo, index) {
        var li = document.createElement('li');
        li.textContent = todo;
        var doneBtn = createButton('Done', function() {
            if (doneBtn.textContent === 'Done') {
                doneBtn.textContent = 'Remove';
                li.style.textDecoration = 'line-through';
                completedTodos.push(todo);
                localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
            } else {
                todos.splice(0, 1);
                localStorage.setItem('todos', JSON.stringify(todos));
                completedTodos = completedTodos.filter(t => t !== todo);
                localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
                displayTodos();
            }
        });

        li.appendChild(doneBtn);
        todoList.appendChild(li);
    });
}

function filterCompleted() {
    var todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    var completed = JSON.parse(localStorage.getItem('completedTodos')) || [];
    completed.forEach(function(todo, index) {
        var li = document.createElement('li');
        li.textContent = todo;
        li.style.textDecoration = 'line-through';
        var removeBtn = createButton('Remove', function() {
            completed.splice(index, 1);
            localStorage.setItem('completedTodos', JSON.stringify(completed));
            filterCompleted();
        });
        li.appendChild(removeBtn);
        todoList.appendChild(li);
    });
}


function filterActive() {
    var todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    var allTodos = JSON.parse(localStorage.getItem('todos')) || [];
    var completedTodos = JSON.parse(localStorage.getItem('completedTodos')) || [];

    var activeTodos = allTodos.filter(todo => !completedTodos.includes(todo));

    activeTodos.forEach(function(todo, index) {
        var li = document.createElement('li');
        li.textContent = todo;

        var doneBtn = createButton('Done', function() {
            completedTodos.push(todo);
            localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
            li.style.textDecoration = 'line-through';
            filterActive();
        });

        li.appendChild(doneBtn);
        todoList.appendChild(li);
    });
}

function clearFilter() {
    displayTodos();
}

window.onload = displayTodos;
