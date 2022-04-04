import './App.scss';
import Card from "./components/Card/Card"
import characters from "./data/data.json"

function App() {
  return (
    <div className="App">
      <div className="container">
        {
          characters.map((character => (
            <Card imageUrl={character.imageUrl}/>
          )))
        }
      </div>
    </div>
  );
}

export default App;
