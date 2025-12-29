import React from "react";

function Components() {
  console.log("Heavy component rendered");

  return (
    <div style={{ padding: "20px", background: "#169a2cff", marginTop: "20px" }}>
      <h3>Heavy Component</h3>
      <p>This is a heavy UI section.</p>
    </div>
  );
}

export default React.memo(Components);
