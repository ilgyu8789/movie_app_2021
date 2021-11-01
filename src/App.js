import React from "react";

function Food({ favourite }) {
  return <h2>I love {favourite}</h2>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food favourite="kimchi" />
      <Food favourite="ramen" />
      <Food favourite="samgiopsal" />
      <Food favourite="chukumi" />
    </div>
  );
}

export default App;
