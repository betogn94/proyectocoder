import React from "react";
import { useEffect, useState } from "react";
import ItemList from './ItemList.jsx';
import './styles/ItemListContainer.css';
import { getData } from "./data/getData.js";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [productos, setProductos] = useState ([])
  const [loading, setLoading] = useState (true)

  const {id} = useParams()

  useEffect(()=>{
    if (id){
      getData()
      .then(respuesta=> setProductos(respuesta.filter((prods) => prods.categories === id)))
      .finally(()=>setLoading(false))
    } else {
      getData()
      .then(respuesta=> setProductos(respuesta))
      .finally(()=>setLoading(false))
    }
  }, [id] )

  return (
    <section className="item-list-container">
      <div>
          {loading ? (<h2>Cargando...</h2>) : (<ItemList productos={productos}/>)}
      </div>
    </section>  
  )

}
    

      

export default ItemListContainer;