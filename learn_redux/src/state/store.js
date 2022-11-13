import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "./modules/counter";
import todos from "./modules/todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export const store = configureStore({
  reducer: rootReducer,
});
