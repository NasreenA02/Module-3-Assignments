import { useState, Suspense, lazy } from "react";

const Components = lazy(() => import("./Components"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React.memo & Lazy Loading Demo</h2>

      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <Suspense fallback={<p>Loading component...</p>}>
        <Components />
      </Suspense>
    </div>
  );
}

export default App;
