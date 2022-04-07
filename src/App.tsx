import './App.scss';
import Card from "./components/Card/Card"
import Characters from "./data/data.json"

const doubleCharacteres = [...Characters, ...Characters];

function App() {
  return (
    <div className="App">
      <div className="container">
          {
            doubleCharacteres.map((character => (
              <div className="container-item">
                <Card imageUrl={character.imageUrl}/>
              </div>
            )))
          }
      </div>
    </div>
  );
}

export default App;
