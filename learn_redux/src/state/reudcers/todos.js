let currentId = 0;

export default function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      currentId++;
      return state.concat({ id: currentId, text: action.text, done: false });
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
