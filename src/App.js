import './App.css';
import Nome from './components/Nome';
import { useState } from 'react'
import Saudacao from './components/Saudacao';

function App() {
  const [nome, setNome] = useState();

  return (
    <div className="App">
      <h1>Saudação</h1>
      <Nome setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  );
}

export default App;
