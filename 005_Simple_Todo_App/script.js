const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const clearButton = document.getElementById("todo-clear")

// Function to add a new todo item
function addTodoItem(todoText, completed = false){

    // Create a new list item element
    const todoItem = document.createElement('li');
    // Add classes to the list item for styling
    todoItem.classList.add('todo-item','list-group-item','d-flex','justfy-content-between','align-items-center');

    // Create a checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('form-check-input');
    checkbox.checked = completed;
    // If the todo item is completed, mark it as completed
    if(completed){
        todoItem.classList.add('completed');
    }

    // Add event listener to the checkbox for toggling completion status
    checkbox.addEventListener('change', function(){
        if(this.checked){
            todoItem.classList.add('completed');
        }else{
            todoItem.classList.remove('completed');
        }

        // Update local storage when checkbox state changes
        updateLocalStorage();
    });

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add('bi','bi-trash-fill','delete-icon','text-danger');
    deleteIcon.style.marginLeft = 'auto';

    // Add event listener to delete icon for removing the todo item
    deleteIcon.addEventListener('click',function(){
        todoItem.remove();

        updateLocalStorage();
    });


    const todoTextElement = document.createElement('span');
    todoTextElement.innerHTML = todoText;

    // Append elements to the todo item
    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoTextElement);
    todoItem.appendChild(deleteIcon);

    // Append the todo item to the todo list
    todoList.appendChild(todoItem);

     // Update local storage after adding the todo item
    updateLocalStorage();
}

// 
form.addEventListener('submit',function(event){
    
    // Prevent the default form submission
    event.preventDefault();
    // Get the trimmed value of the todo input field
    const todoText = input.value.trim();
    // If the input field is not empty, add the todo item
    if(todoText !== ''){
        addTodoItem(todoText);
        input.value = '';
    }
})

// Store todo items to local storage on page load
function updateLocalStorage(){
    // Initialize an array to store todo items
    const todoItems = [];
    // Iterate over each todo item in the list
    todoList.querySelectorAll('.todo-item').forEach(todoItem =>{
        // Get the text of the todo item
        const todoText = todoItem.querySelector('span').innerText;
        // Check if the todo item is completed
        const isCompleted = todoItem.classList.contains('completed');
        // Add todo item to the array
        todoItems.push({text: todoText,completed: isCompleted});
    });
    // Store todo items array in local storage as a JSON string
    localStorage.setItem('todo-list',JSON.stringify(todoItems));
}

// Load todo items from local storage on page load
document.addEventListener('DOMContentLoaded',function(){
    // Retrieve todo items from local storage
    const storedTodo = JSON.parse(localStorage.getItem('todo-list'));
    // If there are stored todo items, add them to the list
    if(storedTodo){
        storedTodo.forEach(todo => addTodoItem(todo.text, todo.completed));
    }
});

// Clear all todo items
clearButton.addEventListener('click', function(){
    // Clear the todo list in the HTML
    todoList.innerHTML = '';
    // Remove todo items from local storage
    localStorage.removeItem('todo-list');
});