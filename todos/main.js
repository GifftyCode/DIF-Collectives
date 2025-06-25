async function fetchTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();

    const container = document.getElementById("todo-container");

    todos.forEach((todo) => {
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");

      todoDiv.innerHTML = `
            <p><strong>User ID:</strong> ${todo.userId}</p>
            <p class="title">${todo.title}</p>
            <p class="status">
              Status: 
              <span class="${todo.completed ? "completed" : "not-completed"}">
                ${todo.completed ? "Completed" : "Not Completed"}
              </span>
            </p>
          `;

      container.appendChild(todoDiv);
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

fetchTodos();
