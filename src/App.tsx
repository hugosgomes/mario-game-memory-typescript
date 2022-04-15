import './App.scss';
import Main from './components/Main';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [points, setPoints] = useState(0)

  const handleResult = (result:boolean) => {
    result && setPoints(points + 1)
  }

  return (
    <div className="App">
      <div className="container">
        <Header points={points} />
        <Main handleResult={handleResult} />
      </div>
    </div>
  );
}

export default App;
