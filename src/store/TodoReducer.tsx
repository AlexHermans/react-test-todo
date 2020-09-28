import {
  DELETE_TODO,
  SWITCH_DISPLAY_MODE,
  ADD_TODO,
  IAddTodoAction,
  IDeleteOrEditTodoAction,
  SAVE_TODO,
  IMultiPropAction,
} from "./actions";

export interface IInitialState {
  displayMode: string;
  list: string[];
}

const initialState: IInitialState = {
  displayMode: "display",
  list: [],
};

export type TTodoActionTypes =
  | IAddTodoAction
  | IMultiPropAction
  | IDeleteOrEditTodoAction;

export function TodoReducer(state = initialState, action: TTodoActionTypes) {
  if (action.type === ADD_TODO) {
    const newList = [...state.list, (action as IAddTodoAction).todo];

    return { ...state, list: newList };
  }

  if (action.type === DELETE_TODO) {
    const newList = state.list.filter(
      (discard, index) =>
        index !== (action as IDeleteOrEditTodoAction).todoIndex
    );
    return { ...state, list: newList };
  }

  if (action.type === SWITCH_DISPLAY_MODE) {
    return { ...state, displayMode: "edit" };
  }

  if (action.type === SAVE_TODO) {
    const newList = state.list.map((todo, index) => {
      if (index === (action as IMultiPropAction).payload.todoIndex) {
        return (todo = (action as IMultiPropAction).payload.updatedText);
      } else {
        return todo;
      }
    });
    return { ...state, list: newList, displayMode: "display" };
  }

  return state;
}
