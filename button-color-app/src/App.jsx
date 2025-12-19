import { useState } from "react";

function App() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <div
        style={{
          backgroundColor: isRed ? "red" : "blue",
          color: "white",
          padding: "20px",
          marginBottom: "10px"
        }}
      >
        div that changes color
      </div>

      <button onClick={() => setIsRed(!isRed)}>
        Change Color
      </button>
    </div>
  );
}

export default App;
