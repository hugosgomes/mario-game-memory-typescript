import Characters from "../data/data.json";
import { randomArray } from "../utils/utils";
import { Char } from "../model/Char";
import { charReducer } from "./charReducer";

const insertStatusInCharacters = (): Char[] => {
  return Characters.map((character) => {
    return { ...character, status: "closed" };
  });
};

const initialState = randomArray([
  ...insertStatusInCharacters(),
  ...insertStatusInCharacters(),
]);

export { initialState, charReducer };
