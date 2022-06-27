import { Char } from "../model/Char"

export const charReducer = (state: Char[], action: any) => {
  switch (action.type) {
    case "openChar":
      state[action.payload] = { ...state[action.payload], status: 'opened' }
      return [...state];
    case "closeChars":
      return state.map((char: Char) => {
        char.status === "opened" && (char.status = "closed");
        return char;
      });
    case "completeChars":
      return state.map((char: Char) => {
        char.status === "opened" && (char.status = "completed");
        return char;
      });
    default:
      return state;
  }
};