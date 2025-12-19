import { useState, useEffect } from "react";
import TodoCard from "./TodoCard";

function TodosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setTodos(data.slice(0, 15));
      });

    // Cleanup function
    return () => {
      alert("cleanup worked");
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodosList;
