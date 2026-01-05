function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      {/* Button */}
      <button
        style={{
          background: "#e5e5e5",
          padding: "10px 16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        Click Me
      </button>

      {/* Responsive Heading (simulated) */}
      <h2 style={{
        fontSize: "32px",
        fontWeight: "bold",
        background: "linear-gradient(to right, purple, pink)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        marginBottom: "20px"
      }}>
        Responsive Gradient Heading
      </h2>

      {/* Image */}
      <img
        src="https://via.placeholder.com/300"
        alt="sample"
        style={{
          width: "300px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          marginBottom: "20px"
        }}
      />

      {/* List */}
      <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ul>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "15px"
      }}>
        {[1,2,3,4,5,6].map((item) => (
          <div
            key={item}
            style={{
              background: "#9ed013ff",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            Card {item}
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
