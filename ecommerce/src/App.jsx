import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarritoProvider } from './Context/CarritoContext';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';



function App() {
  return (
    <>

      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h2>Sitio en Construcción</h2>} />
          </Routes>
        </CarritoProvider>

      </BrowserRouter>
      


    </>
  );
}

export default App;
//<ItemListContainer greeting="Bienvenidos a la cueva del Comic!" />
   //       <ItemDetailContainer />