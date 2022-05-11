import React from "react";
import { useEffect, useState } from "react";
import { productos } from "./data/data";
import ItemList from './ItemList.jsx';
import './styles/ItemListContainer.css';

const items = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });

  function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      items
        .then(resp => {setProductos(resp);
        })
        .finally(() => setLoading(false));
    }, []);

    return (
      <section className="item-list-container">
        <div>
            {loading ? (<h2>Cargando...</h2>) : (<ItemList productos={productos}/>)}
        </div>
      </section>  
    )
}
  
  export default ItemListContainer;