import './App.scss';
import Main from './components/Main';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState("Inicial")

  const handleResult = (result:string) => {
    setResult(result)
  }

  return (
    <div className="App">
      <div className="container">
        <Header result={result} />
        <Main handleResult={handleResult} />
      </div>
    </div>
  );
}

export default App;
