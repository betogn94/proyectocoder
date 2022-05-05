import React from 'react';
import { useState } from 'react';

const ItemCount = ({ onAdd }) => {
  const initial = 1;
  const stock = 5; 

  const [cant, setCant] = useState(initial);

  
  const addProduct = (num) => {
    setCant(cant + num);
  };

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="button-restar"
          onClick={() => addProduct(-1)}
          disabled={cant === initial ? true : null}
        >
          -
        </button>
        <span className="cantidad">{cant}</span>
        <button
          className="button-sumar"
          onClick={() => addProduct(+1)}
          disabled={cant === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="button-primary"
        onClick={() => onAdd(cant)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;
