import React from "react";
import { useState, useEffect } from "react";
import { getProductById } from "./data/getData";
import ItemDetail from './ItemDetail';
import './styles/ItemDetailContainer.css';

const ItemDetailContainer = ({id}) => {
    const [product, setProduct] = useState(null);

    useEffect(()=>{
        getProductById(Number(id), setProduct);
        console.log(product);
    }, [id]);

    return (
        <section className="item-d-container">
            {product ? <ItemDetail item={product} /> : <p>Cargando Detalles...</p>}
        </section>
    )
};

export default ItemDetailContainer;