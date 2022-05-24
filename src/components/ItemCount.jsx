import React from 'react';
import { useState } from 'react';
import './styles/ItemCount.css';

function ItemCount({prod, countModified}) {
  const [count, setCount] = useState(parseFloat(1));
  //console.log(item);

  //sumar
  function sumar() {
    if(count < prod.stock){
      setCount(count+1);
    }
  }

  //restar
  function restar() {
    if(count <= prod.stock && count >1) {
      setCount(count-1);
    }
  }

  //Add to cart
  function onAdd() {
    alert(`Agregaste ${count} productos`)
    countModified();
  }

  return (
    <div className="count-container">
      <div className="count-container__contador">
          <button className='count-container__button' onClick={restar}>-</button>
          <span className="count-container__qty">{count}</span>
          <button className='count-container__button' onClick={sumar}>+</button>
      </div>
        <button className="button-primary" onClick={onAdd}>Add to cart</button>
    </div>
  )
} 



export default ItemCount;
