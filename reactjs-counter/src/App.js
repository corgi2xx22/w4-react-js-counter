import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let color = count > 0 ? "green" : count < 0 ? "red" : "black";
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div className="container">
      <h1>Counter</h1>
      <span style={{ color }} id="value">
        {count}
      </span>
      <div className="btn-group">
        <button className="btn btn-decrease" onClick={decrement}>
          DECREASE
        </button>
        <button className="btn btn-reset" onClick={reset}>
          RESET
        </button>
        <button className="btn btn-increase" onClick={increment}>
          INCREASE
        </button>
      </div>
    </div>
  );
}

export default App;