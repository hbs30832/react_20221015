import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Todos() {
  const [input, setInput] = useState("");
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => dispatch({ type: "ADD_TODO", text: input })}>
        등록
      </button>
      <ul>
        {todos.map((todo) => (
          <li>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
