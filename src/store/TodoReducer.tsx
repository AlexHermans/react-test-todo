import {
  DELETE_TODO,
  SWITCH_DISPLAY_MODE,
  ADD_TODO,
  ITodoWithIndexWithAction,
  SAVE_TODO,
} from "./actions";
import { TTodoList } from "../types/todo";

const initialState: TTodoList = [];

export type TTodoActionTypes = ITodoWithIndexWithAction;

export function TodoReducer(
  state = initialState,
  action: TTodoActionTypes
): TTodoList {
  if (action.type === ADD_TODO) {
    return [...state, action.todo];

    // const newList = [...state.list, (action as IAddTodoAction).todo];
    // return { ...state, list: newList };
  }

  if (action.type === DELETE_TODO) {
    const newList = state.filter(
      (discard, index) => index !== action.todoIndex
    );

    return newList;

    // const newList = state.list.filter(
    //   (discard, index) =>
    //     index !== (action as IDeleteOrEditTodoAction).todoIndex
    // );
    // return { ...state, list: newList };
  }

  if (action.type === SWITCH_DISPLAY_MODE) {
    const newList = state.map((todo, index) => {
      if (index === action.todoIndex) {
        return {
          ...todo,
          editMode: true,
        };
      } else {
        return todo;
      }
    });

    return newList;

    // return { ...state, displayMode: "edit" };
  }

  if (action.type === SAVE_TODO) {
    // const newList = state.list.map((todo, index) => {
    //   if (index === (action as IMultiPropAction).payload.todoIndex) {
    //     return (todo = (action as IMultiPropAction).payload.updatedText);
    //   } else {
    //     return todo;
    //   }
    // });
    // return { ...state, list: newList, displayMode: "display" };

    const newList = state.map((todo, index) => {
      if (index === action.todoIndex) {
        return { ...todo, editMode: false, text: action.todo.text };
      } else {
        return todo;
      }
    });

    return newList;
  }

  return state;
}
