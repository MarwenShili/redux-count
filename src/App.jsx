import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, reset } from "./store/slices/counterSlice";
import { useState } from "react";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const handleAdd = (num) => {
    dispatch(increment(num));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  // const handleIncrementByValue = () => {
  //   dispatch(increment(value));
  // };
  return (
    <div className="app">
      <h1>{counter}</h1>
      <button onClick={() => handleAdd(1)}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <br />
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => handleAdd(+value)}>Increment by value</button>
    </div>
  );
}

export default App;
