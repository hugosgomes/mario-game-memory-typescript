import Card from "../Card/Card";
import "./Main.scss"
import { useReducer, useState } from "react";
import { initialState, charReducer } from "../../store";

interface MainsProps {
  handleResult: any;
}

const Main = ({ handleResult }:MainsProps) => {
  const [chars, dispatch] = useReducer(charReducer, initialState)
  const [loading, setLoading] = useState(false)

  const clickChar = (index:number) => {
    if (loading) return;
    const charsTempFiltered = getCharsOpened();
    openChar(index);
    
    if (charsTempFiltered.length === 1) {
      setLoading(true);      
      setTimeout(() => {
        if (isCorrectPlay()) {
          completeChars();
          handleResult(true)
        } else {
          closeChars();
          handleResult(false)
        }
      }, 1500);
      setLoading(false);
    }
  }

  const openChar = (index:number) => {
    dispatch({type: 'openChar', payload: index})
  }

  const closeChars = () => {
    dispatch({type: 'closeChars'})
  }

  const completeChars = () => {
    dispatch({type: 'completeChars'})
  }

  const isCorrectPlay = () => {
    const charsTempFiltered = getCharsOpened();
    return charsTempFiltered[0].id === charsTempFiltered[1].id;
  }

  const getCharsOpened = () => {
    return chars.filter((character => character.status === "opened"))
  }
  
  return (
    <main>
      {
        chars.map(((character, index) => (
          <div className="container-item" key={index}>
            <Card char={character} onClick={clickChar} index={index}/>
          </div>
        )))
      }
    </main>
  )
}

export default Main;