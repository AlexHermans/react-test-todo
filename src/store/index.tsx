import { combineReducers, createStore } from "redux";
import { TodoReducer } from "./TodoReducer";

const state = {
  todos: TodoReducer,
};

const reducers = combineReducers(state);

export type RootState = ReturnType<typeof reducers>;

export const store = createStore(reducers);
