import Card from "../Card/Card";
import { Char } from "../../model/Char"
import Characters from "../../data/data.json"
import "./Main.scss"
import { useState } from "react";

const randomArray = (array:Char[]) => {
  const result = [];
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = array.length >= 1 ? getRandomInt(0, array.length - 1) : 0;
    const randomElement = array.splice(randomIndex, 1)[0];
    result.push(randomElement);
  }
  return result;
}

const getRandomInt = (min:number, max:number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const insertStatusInCharacters = ():Char[] => {
  return Characters.map((character) => {return {...character, status: "closed"}})
}

const Main = () => {
  const [doubleCharacteres, setDoubleCharacteres] = useState(randomArray([...insertStatusInCharacters(), ...insertStatusInCharacters()]))
  const [rerender, setrerender] = useState(false)

  const closeChars = () => {
    const charsTemp = doubleCharacteres.filter((character => character.status === "opened"))
    if (charsTemp.length === 2) {
      verifyCharsOpened(charsTemp)
    }
  }

  const verifyCharsOpened = (charsTemp:Char[]) => {
    const status = charsTemp[0].id === charsTemp[1].id ? "completed" : "closed";
    setTimeout(() => {      
      setDoubleCharacteres(doubleCharacteres.map(char => {
        char.status === "opened" && (char.status = status);
        return char;
      }));
    }, 3000);
  }

  const openChar = (index:number) => {
    const charsTempFiltered = doubleCharacteres.filter((character => character.status === "opened"))
    if (charsTempFiltered.length <= 2) {
      const charsTemp = doubleCharacteres;
      charsTemp[index].status = "opened";
      setDoubleCharacteres(charsTemp);
      setrerender(!rerender)
    }
  }
  
  return (
    <main>
      {
        doubleCharacteres.map(((character, index) => (
          <div className="container-item" key={index}>
            <Card char={character} closeChars={closeChars} index={index} openChar={openChar}/>
          </div>
        )))
      }
    </main>
  )
}

export default Main;