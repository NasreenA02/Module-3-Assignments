import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("Add");
  const [results, setResults] = useState([]);

  const handleAction = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let result;

    if (isNaN(a) || isNaN(b)) {
      alert("Please enter valid numbers");
      return;
    }

    switch (operation) {
      case "Add":
        result = a + b;
        break;
      case "Subtract":
        result = a - b;
        break;
      case "Multiply":
        result = a * b;
        break;
      default:
        result = 0;
    }

    
    setResults([...results, `${a} ${operation} ${b} = ${result}`]);
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option>Add</option>
        <option>Subtract</option>
        <option>Multiply</option>
      </select>
      <button onClick={handleAction}>Perform Action</button>

      <h3>Results:</h3>
      <ul>
        {results.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
}
