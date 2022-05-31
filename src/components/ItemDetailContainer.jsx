import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import './styles/ItemDetailContainer.css';
import { useParams } from "react-router-dom";
import { getData } from './data/getData' 


const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({})
    const { detalleId } = useParams()

    useEffect(() => {
        getData(detalleId)  // fetch llamada a una api  
        .then(respuesta=> setProducto(respuesta))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))    
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])

    console.log(producto)
    console.log(detalleId)
    
    return (
        <section className="item-d-container">
            {loading ? <h3>Cargando Detalles...</h3> : <ItemDetail prod={producto} /> }
        </section>
    )
};

export default ItemDetailContainer;