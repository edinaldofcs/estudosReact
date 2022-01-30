import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const msg = "Testando props"
  const msg2 = "Testando mensagem 2"

  const dados = {
    foto: 'http://www.fundosanimais.com/Imagens/imagens-lobos.jpg',
    nome: 'Lobo',
    idade: 6,
    velocidadeMaxima: '42 km/h'
  }

  return (
    <div className="App">
      <SayMyName mensagem={msg} />
      <SayMyName mensagem={msg2} />
      <Pessoa dados={dados} />
      {/* <Pesooa nome="Nome de teste" /> */}
    </div>
  );
}

export default App;
