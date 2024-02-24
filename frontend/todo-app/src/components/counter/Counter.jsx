import { useState } from "react";
import CounterButton from "./CounterButton";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementCounterParentFunction(by) {
    setCount(count + by);
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <>
      <span className="totalCount">{count}</span>
      <CounterButton
        by={1}
        incrementMethod={incrementCounterParentFunction}
        reset={resetCounter}
      />
      <CounterButton
        by={2}
        incrementMethod={incrementCounterParentFunction}
        reset={resetCounter}
      />
      <CounterButton
        by={5}
        incrementMethod={incrementCounterParentFunction}
        reset={resetCounter}
      />
      <div>
        <button className="resetButton" onClick={resetCounter}>
          Reset
        </button>
      </div>
    </>
  );
}
