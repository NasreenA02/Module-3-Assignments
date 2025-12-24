import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <div key={todo.id} style={styles.card}>
          <h4>{todo.title}</h4>
          <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
    padding: "20px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "8px",
    background: "#270303ff",
  },
};

export default Todos;
