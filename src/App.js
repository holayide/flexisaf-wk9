import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => ++count);
  };

  const handleDecrement = () => {
    setCount((count) => --count);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="app">
        <h1>Count:</h1>
        <h2 data-testid="header-2">{count}</h2>
        <div className="btns">
          <button onClick={handleIncrement}>increment</button>
          <button onClick={handleDecrement}>decrement</button>
          <button onClick={handleReset}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
