import React from 'react';
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx';
import './style.css';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Cart} from './components/Cart'
import CartContextProvider from './Context/CartContext.jsx';


export default function App() {
  return (
    
      <BrowserRouter>
        <CartContextProvider>

          <NavBar />  
          <Routes>
            <Route path='/' element= {<ItemListContainer />}/>
            <Route path='/categories/:id' element= {<ItemListContainer />}/>
            <Route path='/detail/:detalleId' element= {<ItemDetailContainer/>} /> 
            <Route path="/cart" element = { <Cart /> } />

            <Route path='/*' element= {<Navigate to='/' replace/>} />

          </Routes>

        </CartContextProvider>
      </BrowserRouter>
    
  );
};
