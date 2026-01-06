import React, { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task, done: false }]);
    setTask("");
  };

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return (
    <div className="card">
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter a todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      {todos.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          {todos.map((todo, index) => (
            <div key={index} className="todo-item">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleDone(index)}
              />
              <span
                style={{
                  textDecoration: todo.done ? "line-through" : "none",
                  marginLeft: "10px",
                }}
              >
                {todo.text}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
