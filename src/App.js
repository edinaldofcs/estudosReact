import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} > </Route>
      </Routes>
      <Routes>
        <Route path="/sobre" element={<Sobre />} > </Route>
      </Routes>
      <Routes>
        <Route path="/contato" element={<Contato />} > </Route>
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
