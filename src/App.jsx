import { CartWidget } from './components/CartWidget/CartWidget';
import Contacto from './components/Contacto/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
      <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/item/:id' element={ <ItemDetailContainer />}/>
            <Route path='/productos/:categoria' element={ <ItemListContainer/> }/>
            <Route path='/cart' element={<CartWidget />} /> 
            <Route path='/contacto' element={<Contacto />} />


          </Routes>

      </BrowserRouter>
  );
}

export default App;

