import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/shopping-cart' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;