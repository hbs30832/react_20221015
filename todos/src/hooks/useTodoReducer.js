import { useReducer, useRef } from "react";

const initialTodoState = [
  {
    id: 1,
    text: "todo 컴포넌트 만들기",
    done: true,
  },
  {
    id: 2,
    text: "todo 기능 구현하기",
    done: false,
  },
  {
    id: 3,
    text: "todo 리팩토링 하기",
    done: false,
  },
];

function reducer(state, action) {}

function useTodoReducer() {
  const [todos, dispatch] = useReducer(reducer, initialTodoState);

  return [todos, dispatch];
}

export default useTodoReducer;
