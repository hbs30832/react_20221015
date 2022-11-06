import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "./reudcers/counter";
import todos from "./reudcers/todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export const store = configureStore({
  reducer: rootReducer,
});
