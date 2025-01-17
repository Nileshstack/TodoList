const todoform = document.querySelector('form');
const todoInput = document.getElementById('todoinput');
const todolistul = document.getElementById('todolist');

let alltodos = [];
todoform.addEventListener('submit', function (e) {
    e.preventDefault();
    addTodo();
});

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText.length > 0) {
        alltodos.push(todoText);
        update();
        todoInput.value = "";
    }
}

function update() {
    todolistul.innerHTML = "";
    alltodos.forEach((todo, todoIndex) => {
        const todoItem = createtodoitems(todo, todoIndex);
        todolistul.append(todoItem);
    });
}

function createtodoitems(todo, todoindex) {
    const todoid = "todo-" + todoindex;
    const todoli = document.createElement("li");
    todoli.className = "todo";
    todoli.innerHTML = `
        <input type="checkbox" id="${todoid}">
        <label class="customcheckbox" for="${todoid}">
            <svg fill="var(--secondry-color)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>   
        </label>
        <label for="${todoid}" class="todotext">${todo}</label>
        <button class="deletebutton">
            <svg fill="var(--secondry-color)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg> 
        </button>
    `;

    const deleteButton = todoli.querySelector('.deletebutton');
    deleteButton.addEventListener('click', () => {
        alltodos.splice(todoindex, 1);
        update();
    });

    return todoli;
}
