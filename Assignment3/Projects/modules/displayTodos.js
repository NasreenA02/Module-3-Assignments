export function displayTodos(data) {
  const container = document.getElementById("todos");
  container.innerHTML = "";

  data.forEach(todo => {
    const div = document.createElement("div");
    div.style.margin = "10px";
    div.style.padding = "10px";
    div.style.border = "1px solid #ccc";

    div.innerHTML = `
      <h3>${todo.title}</h3>
      <p>Status: ${todo.completed ? " Completed" : " Not Completed"}</p>
    `;

    container.appendChild(div);
  });
}
