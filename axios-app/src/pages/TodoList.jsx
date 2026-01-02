import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((data) => setTodos(data.slice(0, 10)));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h4>{todo.title}</h4>
          <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>

          <Link to={`/todo/${todo.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
