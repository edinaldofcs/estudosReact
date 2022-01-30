import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const msg = "CSS modules"

  const dados = {
    foto: 'http://www.fundosanimais.com/Imagens/imagens-lobos.jpg',
    nome: 'Lobo',
    idade: 6,
    velocidadeMaxima: '42 km/h'
  }

  return (
    <div className="App">
      <SayMyName mensagem={msg} />
      <Pessoa dados={dados} />
      <Pessoa dados={dados} />
      {/* <Pesooa nome="Nome de teste" /> */}
    </div>
  );
}

export default App;
