import React from "react";
import ItemCount from "./ItemCount";
import './styles/ItemDetail.css'

const ItemDetail = ({item}) => {
    const onAdd = (cant) => {
        alert(`Agregaste ${cant} productos`);
    };

    console.log(item);

    return (
        
        <div className="producto-detail">
            <img src={ item.thumbnail } alt="Thumbnail" className="producto-detail-thumb"/>
            <div className="producto-detail-info">
                <h2 className="name">{item.name}</h2>
                <p className="description">{item.description}</p>
                <h4 className="price">${item.price}</h4>
                <ItemCount stock={item.stock} onAdd={onAdd} initial={1} />
            </div>
        </div>
    );
};

export default ItemDetail;