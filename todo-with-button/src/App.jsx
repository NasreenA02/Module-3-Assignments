import { useState } from "react";
import TodosList from "./TodosList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div>
      <h1>Todo List with Cleanup</h1>
      <button onClick={() => setShowTodos(!showTodos)}>
        {showTodos ? "Unmount Todos" : "Mount Todos"}
      </button>

      {showTodos && <TodosList />}
    </div>
  );
}

export default App;
