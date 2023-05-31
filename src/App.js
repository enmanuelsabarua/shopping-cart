import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import { useState } from 'react';

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <>
      <NavBar cartProducts={cartProducts} total={total} setCartProducts={setCartProducts} setTotal={setTotal} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog setCartProducts={setCartProducts} setTotal={setTotal} total={total} cartProducts={cartProducts} />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;