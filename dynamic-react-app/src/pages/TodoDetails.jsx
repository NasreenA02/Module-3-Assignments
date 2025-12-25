import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TodoDetails() {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [todoId]);

  if (!todo) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h3>Todo ID: {todo.id}</h3>
      <h4>{todo.title}</h4>
      <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

export default TodoDetails;
