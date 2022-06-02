import React from "react";
import { useEffect, useState } from "react";
import ItemList from './ItemList.jsx';
import './styles/ItemListContainer.css';
//import { getData } from "./data/getData.js";
import { useParams } from "react-router-dom";
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore'


const ItemListContainer = () => {
  const [productos, setProductos] = useState ([])
  const [loading, setLoading] = useState (true)

  const {id} = useParams()

  useEffect(()=>{
    const db = getFirestore()

    const queryCollection = collection(db, 'products')
    const queryCollectionFilter = query(queryCollection, where('categories', '==', 'skate'))
    getDocs(queryCollectionFilter)
    .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ) )
    .catch((err)=> console.log(err))
    .finally(()=>setLoading(false))
 }, [])

  //useEffect(()=>{
    //if (id){
     // getData()
      //.then(respuesta=> setProductos(respuesta.filter((prods) => prods.categories === id)))
      //.finally(()=>setLoading(false))
   // } else {
     // getData()
     // .then(respuesta=> setProductos(respuesta))
     // .finally(()=>setLoading(false))
    //}
  //}, [id] )

  console.log(id)

  return (
    <section className="item-list-container">
      <div>
          {loading ? (<h2>Cargando...</h2>) : (<ItemList productos={productos}/>)}
      </div>
    </section>  
  )

}
    

      

export default ItemListContainer;