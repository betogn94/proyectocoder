import React from 'react';
import { useState } from 'react';
import './styles/ItemCount.css';

function ItemCount({stock, initial, onAdd, handleInputType}) {
  const [count, setCount] = useState(initial);
  //console.log(item);

  //sumar
  function sumar() {
    if(count < stock){
      setCount(count+1);
    }
  }

  //restar
  function restar() {
    if(count > initial) {
      setCount(count-1);
    }
  }

  //Add to cart
  function addToCart() {
    onAdd(count);
    handleInputType();
  }

  return (
    <div className="count-container">
      <div className="count-container__contador">
          <button className='count-container__button' onClick={restar}>-</button>
          <span className="count-container__qty">{count}</span>
          <button className='count-container__button' onClick={sumar}>+</button>
      </div>
        <button className="button-primary" onClick={addToCart}>Add to cart</button>
    </div>
  )
} 



export default ItemCount;
