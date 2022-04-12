import Card from "../Card/Card";
import { Char, status } from "../../model/Char"
import Characters from "../../data/data.json"
import "./Main.scss"
import { useEffect, useState } from "react";

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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log("doubleCharacteres")
  }, [doubleCharacteres])
  

  const clickChar = (index:number) => {
    if (loading) return;
    if (getCharsOpened().length === 0) {
      openChar(index);
    } else if (getCharsOpened().length === 1) {
      openChar(index);
      setLoading(true);
      const charsTempFiltered = getCharsOpened();
      setTimeout(() => {
        if (isCorrectPlay(charsTempFiltered)) {
          completeChars();
        } else {
          closeChars();
        }
      }, 2000);
      setLoading(false);
    }
  }

  const openChar = (index:number) => {
    setStatusChar(index, "opened")
  }

  const closeChars = () => {
    setDoubleCharacteres(doubleCharacteres.map(char => {
      char.status === "opened" && (char.status = "closed");
      return char;
    }));
  }

  const completeChars = () => {
    setDoubleCharacteres(doubleCharacteres.map(char => {
      char.status === "opened" && (char.status = "completed");
      return char;
    }));
  }

  const setStatusChar = (index:number, status: status) => {
    const charsTemp = [...doubleCharacteres];
    charsTemp[index].status = status;
    setDoubleCharacteres(charsTemp);
  }

  const isCorrectPlay = (charsTempFiltered:Char[]) => {
    return charsTempFiltered[0].id === charsTempFiltered[1].id;
  }

  const getCharsOpened = () => {
    return doubleCharacteres.filter((character => character.status === "opened"))
  }
  
  return (
    <main>
      {
        doubleCharacteres.map(((character, index) => (
          <div className="container-item" key={index}>
            <Card char={character} onClick={clickChar} index={index}/>
          </div>
        )))
      }
    </main>
  )
}

export default Main;