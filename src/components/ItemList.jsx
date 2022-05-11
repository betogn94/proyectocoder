import React from "react";
import Item from './Item.jsx';
import './styles/ItemList.css';

function ItemList({productos}) {
    return (
      <div className="item-list">
          {productos.map(item => <Item key={item.id} name={item.name} description={item.description} price={item.price} thumbnail={item.thumbnail} stock={item.stock}/>)}
      </div>
    )
  }
  
  export default ItemList;
