import { useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0);
  const [incrementBy, increaseCount] = useState(1);

  function increment() {
    setCount(count + incrementBy);
  }
  function decrement() {
    setCount(count - incrementBy);
  }

  function incrementCount() {
    increaseCount(incrementBy + 1);
  }

  function decrementCount() {
    increaseCount(incrementBy - 1);
  }

  return (
    <div>
      <div>
        <div>Count {count}</div>
        <div>
          <button onClick={increment}>Increment</button>
        </div>
        <div>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
      <div>
        <h3>We are Incrementing the Value by: {incrementBy}</h3>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
    </div>
  );
};
