import React from 'react';
import ItemList from './ItemList';
import './styles/ItemListContainer.css'

const ItemListContainer = () => {
    return (
      <section className="item-list-container">
        <div className='titulo-container'>
          <h2 className="item-list-container__title">Productos</h2>
        </div>
        <ItemList />
      </section>
    );
  };

export default ItemListContainer;
    