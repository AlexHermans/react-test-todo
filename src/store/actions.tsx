import { Action } from "redux";

export interface IAddTodoAction extends Action {
  todo: string | "";
}

export interface IDeleteOrEditTodoAction extends Action {
  todoIndex: number;
}

export interface ISaveTodoAction {
  todoIndex: number;
  updatedText: string;
}

export interface IMultiPropAction extends Action {
  payload: ISaveTodoAction;
}

export const ADD_TODO = "Add to to do list";
export const DELETE_TODO = "Delete to do from list";
export const SWITCH_DISPLAY_MODE = "Switch to edit-form for to do";
export const SAVE_TODO = "Update to do in list";

export function addTodoAction(todo: string): IAddTodoAction {
  return {
    type: ADD_TODO,
    todo,
  };
}

export function deleteTodoAction(todoIndex: number): IDeleteOrEditTodoAction {
  return {
    type: DELETE_TODO,
    todoIndex,
  };
}

export function switchDisplayModeAction(
  todoIndex: number
): IDeleteOrEditTodoAction {
  return {
    type: SWITCH_DISPLAY_MODE,
    todoIndex,
  };
}

export function saveTodoAction(payload: any): IMultiPropAction {
  return {
    type: SAVE_TODO,
    payload,
  };
}
