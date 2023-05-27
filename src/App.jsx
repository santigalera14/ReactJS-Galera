import { CartWidget } from './components/CartWidget/CartWidget';
import Contacto from './components/Contacto/Contacto';
import { CartProvider } from './components/Context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Carrito from './components/Carrito/Carrito';
import Checkout from './components/Checkout/Checkout';




function App() {



  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />


        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/productos/:categoria' element={<ItemListContainer />} />
          <Route path='/cart' element={<CartWidget />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/checkout' element={<Checkout />} />
          


        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

