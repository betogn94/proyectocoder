import React from "react";
import Item from './Item.jsx';
import './styles/ItemList.css';


  const ItemList = ({ productos }) => {
    return (
          productos.map((prod) =>  <Item key={prod.id} prod={prod} />  )
    )
  }
  
  
  export default ItemList;
