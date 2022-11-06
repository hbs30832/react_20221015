import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => dispatch({ type: "ADD" })}>+1</button>
      <button onClick={() => dispatch({ type: "SUB" })}>-1</button>
    </div>
  );
}

export default Counter;
