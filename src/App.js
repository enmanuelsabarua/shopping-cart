import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Catalog from './components/Catalog';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog'>
          <Route index element={<Catalog />}/>
          <Route path='processors' element={<Catalog category='Processors' />}/>
          <Route path='memory' element={<Catalog category='Memory' />}/>
          <Route path='motherboards' element={<Catalog category='Motherboards' />}/>
          <Route path='video-cards' element={<Catalog category='Video Cards' />}/>
          <Route path='chassis' element={<Catalog category='Chassis' />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;