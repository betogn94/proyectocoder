import React from 'react';
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx';
import './style.css';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';


export default function App() {
  return (
    
      <>
        <NavBar />  
        <ItemListContainer />
        <ItemDetailContainer id={5} />
      </>
    
  );
};
