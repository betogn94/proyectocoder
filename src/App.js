import React from 'react';
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx';
import './style.css';
import ItemCount from './components/ItemCount.jsx';

export default function App() {
  const onAdd = (cant) => {
    alert(`Agregaste ${cant} productos`);
  }


  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemCount onAdd={onAdd} />
    </>
  );
}
