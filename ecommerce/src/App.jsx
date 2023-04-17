import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/Hooks';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer/>}/>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        </Routes>


      </BrowserRouter>
      <ItemCount />


    </>
  );
}

export default App;
//<ItemListContainer greeting="Bienvenidos a la cueva del Comic!" />
   //       <ItemDetailContainer />