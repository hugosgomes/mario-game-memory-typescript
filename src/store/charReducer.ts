import { Char } from "../model/Char"

interface reducerActionsType {
  openChar: (state: Char[], action: any) => Char[];
  closeChars: (state: Char[]) => Char[];
  completeChars: (state: Char[]) => Char[];
}

const reducerActions: reducerActionsType = {
  openChar: (state: Char[], action: any) => {
    state[action.payload] = { ...state[action.payload], status: 'opened' }
      return [...state];
  },
  closeChars: (state: Char[]) => {
    return state.map((char: Char) => {
      char.status === "opened" && (char.status = "closed");
      return char;
    });
  },
  completeChars: (state: Char[]) => {
    return state.map((char: Char) => {
      char.status === "opened" && (char.status = "completed");
      return char;
    });
  }
}

export const charReducer = (state: Char[], action: any) => {
  let fn = reducerActions[action.type as keyof reducerActionsType];

  if (fn) {
    return fn(state, action);
  }
  console.log('[WARNING] Action without reducer:', action);
  return state;
};