import { Action } from "redux";
import { TTodo, TTodoIndex } from "../types/todo";

export interface ITodoWithAction extends Action {
  todo: TTodo;
}

export interface ITodoIndexWithAction extends Action {
  todoIndex: TTodoIndex;
}

export interface ITodoWithIndexWithAction extends Action {
  todo: TTodo;
  todoIndex: TTodoIndex;
}

export const ADD_TODO = "Add to to do list";
export const DELETE_TODO = "Delete to do from list";
export const SWITCH_DISPLAY_MODE = "Switch to edit-form for to do";
export const SAVE_TODO = "Update to do in list";

export function addTodoAction(todo: TTodo): ITodoWithAction {
  return {
    type: ADD_TODO,
    todo,
  };
}

export function deleteTodoAction(todoIndex: number): ITodoIndexWithAction {
  return {
    type: DELETE_TODO,
    todoIndex,
  };
}

export function switchDisplayModeAction(
  todoIndex: number
): ITodoIndexWithAction {
  return {
    type: SWITCH_DISPLAY_MODE,
    todoIndex,
  };
}

export function saveTodoAction(
  todo: TTodo,
  todoIndex: TTodoIndex
): ITodoWithIndexWithAction {
  return {
    type: SAVE_TODO,
    todo,
    todoIndex,
  };
}
