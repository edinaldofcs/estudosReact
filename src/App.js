import './App.css';

function App() {

  function soma(a,b){
    return a + b
  }

  return (
    <div className="App">
      <h1>Soma</h1>
      <h2>A soma de {5} e {7} = {soma(5, 7)}</h2>
    </div>
  );
}

export default App;
