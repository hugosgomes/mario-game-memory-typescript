import { Char } from "../model/Char";

const getRandomInt = (min:number, max:number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomArray = (array: Char[]) => {
  const result = [];
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = array.length >= 1 ? getRandomInt(0, array.length - 1) : 0;
    const randomElement = array.splice(randomIndex, 1)[0];
    result.push(randomElement);
  }
  return result;
}

export { randomArray };