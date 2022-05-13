import React from "react";
import { productos } from "./data/data";
import ItemCount from "./ItemCount";
import './styles/Item.css';


const Item = ({ name,thumbnail, price, id, stock }) => {
    const onAdd = (cant) => {
        alert(`Agregaste ${ cant } productos`);
    };

    let prod = productos;
    function detail(prod) {
        console.log(prod)
    }

    

    return(
        <article className="product-card">
            
            <img className="product-card__image" src={thumbnail} alt="" />
            <h3 className="product-card__name">{name}</h3>
            <span className="product-card__name">${price}</span>
            <ItemCount stock={stock} onAdd={onAdd} initial={1} />
            <button className="bu" onClick={(() => detail(prod))}>Details</button>
           
        </article>
    )
};

export default Item;
